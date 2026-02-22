import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Calendar, GraduationCap, TrendingUp, Lock, Plus, Trash2, Save, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import confetti from "canvas-confetti";

interface Profile {
  display_name: string | null;
  university: string | null;
  major: string | null;
  graduation_year: number | null;
  target_gpa: number | null;
  avatar_url: string | null;
}

interface SemesterRecord {
  id: string;
  semester_name: string;
  semester_number: number;
  gpa: number;
  credits: number;
  year: number | null;
}

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [semesters, setSemesters] = useState<SemesterRecord[]>([]);
  const [editProfile, setEditProfile] = useState(false);
  const [profileForm, setProfileForm] = useState<Profile>({
    display_name: "", university: "", major: "", graduation_year: null, target_gpa: null, avatar_url: null,
  });
  const [newSem, setNewSem] = useState({ semester_name: "", gpa: "", credits: "", year: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    fetchProfile();
    fetchSemesters();
  }, [user]);

  const fetchProfile = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("display_name, university, major, graduation_year, target_gpa, avatar_url")
      .eq("user_id", user!.id)
      .single();
    if (data) {
      setProfile(data);
      setProfileForm(data);
    }
  };

  const fetchSemesters = async () => {
    const { data } = await supabase
      .from("semester_records")
      .select("*")
      .eq("user_id", user!.id)
      .order("semester_number", { ascending: true });
    if (data) setSemesters(data);
  };

  const saveProfile = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        display_name: profileForm.display_name,
        university: profileForm.university,
        major: profileForm.major,
        graduation_year: profileForm.graduation_year,
        target_gpa: profileForm.target_gpa,
      })
      .eq("user_id", user!.id);
    if (error) {
      toast({ title: "Error saving profile", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Profile updated!" });
      setProfile(profileForm);
      setEditProfile(false);
    }
    setSaving(false);
  };

  const addSemester = async () => {
    const gpa = parseFloat(newSem.gpa);
    if (!newSem.semester_name || isNaN(gpa)) {
      toast({ title: "Fill in semester name and GPA", variant: "destructive" });
      return;
    }
    const nextNum = semesters.length + 1;
    const { error } = await supabase.from("semester_records").insert({
      user_id: user!.id,
      semester_name: newSem.semester_name,
      semester_number: nextNum,
      gpa: gpa,
      credits: parseInt(newSem.credits) || 0,
      year: parseInt(newSem.year) || null,
    });
    if (error) {
      toast({ title: "Error adding semester", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Semester added!" });
      if (gpa >= 3.5) confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
      setNewSem({ semester_name: "", gpa: "", credits: "", year: "" });
      fetchSemesters();
    }
  };

  const deleteSemester = async (id: string) => {
    await supabase.from("semester_records").delete().eq("id", id);
    fetchSemesters();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground">Loading...</p></div>;
  if (!user) return <Navigate to="/" replace />;

  const cgpa = semesters.length > 0
    ? (semesters.reduce((sum, s) => sum + Number(s.gpa) * s.credits, 0) / Math.max(semesters.reduce((sum, s) => sum + s.credits, 0), 1)).toFixed(2)
    : "—";

  const targetGpa = profile?.target_gpa ?? 3.5;
  const currentCgpa = parseFloat(cgpa) || 0;
  const progress = Math.min((currentCgpa / targetGpa) * 100, 100);

  const chartData = semesters.map(s => ({ name: s.semester_name, GPA: Number(s.gpa) }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl font-bold text-foreground">Your Dashboard</h1>
            <p className="mt-1 text-muted-foreground">Track your academic journey and set goals.</p>
          </motion.div>

          {/* Stats row */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Cumulative GPA</p>
              <p className="mt-1 font-display text-3xl font-bold text-primary">{cgpa}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Semesters Tracked</p>
              <p className="mt-1 font-display text-3xl font-bold text-foreground">{semesters.length}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Goal Progress</p>
              <div className="mt-2 h-3 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{currentCgpa} / {targetGpa} target</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Profile card */}
            <div className="rounded-xl border border-border bg-card p-6 lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" /> Profile
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setEditProfile(!editProfile)}>
                  {editProfile ? "Cancel" : "Edit"}
                </Button>
              </div>

              {editProfile ? (
                <div className="space-y-3">
                  <div><Label className="text-xs">Name</Label><Input value={profileForm.display_name || ""} onChange={e => setProfileForm({...profileForm, display_name: e.target.value})} /></div>
                  <div><Label className="text-xs">University</Label><Input value={profileForm.university || ""} onChange={e => setProfileForm({...profileForm, university: e.target.value})} placeholder="e.g. UCLA" /></div>
                  <div><Label className="text-xs">Major</Label><Input value={profileForm.major || ""} onChange={e => setProfileForm({...profileForm, major: e.target.value})} placeholder="e.g. Computer Science" /></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div><Label className="text-xs">Grad Year</Label><Input type="number" value={profileForm.graduation_year || ""} onChange={e => setProfileForm({...profileForm, graduation_year: parseInt(e.target.value) || null})} /></div>
                    <div><Label className="text-xs">Target GPA</Label><Input type="number" step="0.01" min="0" max="4" value={profileForm.target_gpa || ""} onChange={e => setProfileForm({...profileForm, target_gpa: parseFloat(e.target.value) || null})} /></div>
                  </div>
                  <Button size="sm" className="w-full gap-1" onClick={saveProfile} disabled={saving}>
                    <Save className="h-3.5 w-3.5" /> {saving ? "Saving..." : "Save Profile"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" />{user.email}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" />Joined {new Date(user.created_at).toLocaleDateString()}</div>
                  {profile?.university && <div className="flex items-center gap-2 text-muted-foreground"><GraduationCap className="h-4 w-4" />{profile.university}</div>}
                  {profile?.major && <div className="flex items-center gap-2 text-muted-foreground"><TrendingUp className="h-4 w-4" />{profile.major}</div>}
                  {profile?.target_gpa && <div className="flex items-center gap-2 text-muted-foreground"><Target className="h-4 w-4" />Target: {profile.target_gpa} GPA</div>}
                </div>
              )}
            </div>

            {/* GPA Chart */}
            <div className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
              <h2 className="font-display text-lg font-semibold text-foreground mb-4">Academic Growth</h2>
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                    <YAxis domain={[0, 4]} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                    <Line type="monotone" dataKey="GPA" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
                  Add semesters below to see your growth chart
                </div>
              )}
            </div>
          </div>

          {/* Add semester */}
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">Semester History</h2>
            <div className="flex flex-wrap gap-3 items-end">
              <div><Label className="text-xs">Semester Name</Label><Input className="w-40" value={newSem.semester_name} onChange={e => setNewSem({...newSem, semester_name: e.target.value})} placeholder="e.g. Fall 2025" /></div>
              <div><Label className="text-xs">GPA</Label><Input className="w-20" type="number" step="0.01" min="0" max="4" value={newSem.gpa} onChange={e => setNewSem({...newSem, gpa: e.target.value})} /></div>
              <div><Label className="text-xs">Credits</Label><Input className="w-20" type="number" min="0" value={newSem.credits} onChange={e => setNewSem({...newSem, credits: e.target.value})} /></div>
              <div><Label className="text-xs">Year</Label><Input className="w-24" type="number" value={newSem.year} onChange={e => setNewSem({...newSem, year: e.target.value})} placeholder="2025" /></div>
              <Button size="sm" className="gap-1" onClick={addSemester}><Plus className="h-3.5 w-3.5" /> Add</Button>
            </div>

            {semesters.length > 0 && (
              <div className="mt-4 space-y-2">
                {semesters.map(s => (
                  <div key={s.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-2.5 text-sm">
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-foreground">{s.semester_name}</span>
                      <span className="text-muted-foreground">{s.credits} credits</span>
                      {s.year && <span className="text-muted-foreground">{s.year}</span>}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-display font-bold ${Number(s.gpa) >= 3.5 ? 'text-primary' : 'text-foreground'}`}>{Number(s.gpa).toFixed(2)}</span>
                      <button onClick={() => deleteSemester(s.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Premium placeholders */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="premium-card rounded-xl border border-border bg-card p-6">
              <div className="relative z-10 flex flex-col items-center justify-center py-8 text-center">
                <Lock className="h-8 w-8 text-muted-foreground mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground">Semester Tracking Pro</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-xs">Course-level tracking, grade predictions, and automated CGPA projections.</p>
                <span className="premium-badge mt-3">Coming Soon — Premium</span>
              </div>
            </div>
            <div className="premium-card rounded-xl border border-border bg-card p-6">
              <div className="relative z-10 flex flex-col items-center justify-center py-8 text-center">
                <Lock className="h-8 w-8 text-muted-foreground mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground">Career Prediction</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-xs">AI-powered career path suggestions based on your academic profile and GPA trajectory.</p>
                <span className="premium-badge mt-3">Coming Soon — Premium</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="outline" onClick={signOut}>Sign Out</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
