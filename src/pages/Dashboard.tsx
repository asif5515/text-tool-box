import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Mail, Calendar } from "lucide-react";

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground">Loading...</p></div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <h1 className="font-display text-3xl font-bold text-foreground">Your Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Welcome back! Here's your account overview.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> Profile
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(user.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="font-display text-lg font-semibold text-foreground">Quick Links</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• More dashboard features coming soon</li>
                <li>• Save your GPA calculations</li>
                <li>• Track your study progress</li>
              </ul>
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
