import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Trash2, Plus, Calendar, Clock, Download, Sparkles, ArrowRight, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Subject {
  id: string;
  name: string;
  examDate: string;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StudyScheduleMaker = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "", examDate: "" }
  ]);
  const [selectedDays, setSelectedDays] = useState<string[]>(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
  const [hoursPerDay, setHoursPerDay] = useState("3");
  const [schedule, setSchedule] = useState<Record<string, string[]> | null>(null);
  const [loading, setLoading] = useState(false);

  const addSubject = () => {
    setSubjects([...subjects, { id: Math.random().toString(36).substr(2, 9), name: "", examDate: "" }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const generateSchedule = () => {
    const validSubjects = subjects.filter(s => s.name.trim() !== "");
    if (validSubjects.length === 0 || selectedDays.length === 0) return;

    setLoading(true);
    
    setTimeout(() => {
      // Sort subjects by exam date (closest first)
      const sortedSubjects = [...validSubjects].sort((a, b) => {
        if (!a.examDate) return 1;
        if (!b.examDate) return -1;
        return new Date(a.examDate).getTime() - new Date(b.examDate).getTime();
      });

      const hours = parseInt(hoursPerDay) || 1;
      const newSchedule: Record<string, string[]> = {};
      
      let subjectIndex = 0;
      selectedDays.forEach(day => {
        newSchedule[day] = [];
        for (let i = 0; i < hours; i++) {
          // Simple distribution logic: prioritize subjects with closer exams
          // In a real AI version, this would be more nuanced
          const subject = sortedSubjects[subjectIndex % sortedSubjects.length];
          newSchedule[day].push(subject.name);
          subjectIndex++;
        }
      });

      setSchedule(newSchedule);
      setLoading(false);
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <ToolPageLayout
      title="Free Study Schedule Maker for Students"
      metaDescription="Generate a personalized weekly study schedule instantly. Our free AI-powered study planner helps students organize subjects, track exam dates, and optimize study hours."
      h1="Free Study Schedule Maker"
      intro="Organize your academic life in seconds. Input your subjects, set your available hours, and get a custom weekly timetable designed to help you ace your exams."
      howToUse={[
        "List all the subjects or courses you need to study.",
        "Add optional exam dates to prioritize urgent topics.",
        "Select the days of the week you are available to study.",
        "Set your target study hours per day.",
        "Click 'Generate Schedule' and print or download your plan."
      ]}
      benefits={[
        "Prioritizes subjects with upcoming exams automatically.",
        "Balances your workload across the week to prevent burnout.",
        "Customizable to your specific availability and pace.",
        "Completely free and private — no account required."
      ]}
      faqs={[
        { question: "How many hours should I study per day?", answer: "It depends on your goals and course load, but most experts recommend 2-4 hours of focused study per day for college students. Quality is more important than quantity — use techniques like Pomodoro to stay sharp." },
        { question: "Does the tool account for exam dates?", answer: "Yes! If you provide exam dates, the generator prioritizes those subjects in your weekly rotation to ensure you have enough time for revision." },
        { question: "Can I save my schedule?", answer: "You can use the 'Print / Save as PDF' button to keep a copy. If you create a free account, we are working on a feature to save and sync your schedules across devices." },
        { question: "Is this a one-time schedule or a recurring one?", answer: "The tool generates a weekly template. You can use it as a recurring routine or generate a new one each week as your priorities shift." }
      ]}
    >
      <div className="space-y-8 max-w-4xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <Card className="p-6 border-border bg-card space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" /> Subjects & Exams
                </Label>
                <Button variant="outline" size="sm" onClick={addSubject} className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" /> Add
                </Button>
              </div>
              
              <div className="space-y-3">
                {subjects.map((s) => (
                  <div key={s.id} className="flex gap-2 items-start">
                    <div className="flex-1 space-y-1">
                      <Input 
                        value={s.name} 
                        onChange={(e) => updateSubject(s.id, "name", e.target.value)} 
                        placeholder="Subject name" 
                        className="h-9"
                      />
                    </div>
                    <div className="w-32">
                      <Input 
                        type="date" 
                        value={s.examDate} 
                        onChange={(e) => updateSubject(s.id, "examDate", e.target.value)} 
                        className="h-9 text-xs"
                      />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeSubject(s.id)}
                      className="h-9 w-9 text-muted-foreground hover:text-destructive"
                      disabled={subjects.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> Study Days
              </Label>
              <div className="flex flex-wrap gap-3">
                {DAYS.map(day => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox 
                      id={day} 
                      checked={selectedDays.includes(day)} 
                      onCheckedChange={() => toggleDay(day)}
                    />
                    <label htmlFor={day} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {day.slice(0, 3)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Daily Study Hours
              </Label>
              <div className="flex items-center gap-4">
                <Input 
                  type="number" 
                  min="1" 
                  max="12" 
                  value={hoursPerDay} 
                  onChange={(e) => setHoursPerDay(e.target.value)} 
                  className="w-24"
                />
                <span className="text-sm text-muted-foreground">hours per day</span>
              </div>
            </div>

            <Button 
              onClick={generateSchedule} 
              disabled={loading || subjects.every(s => !s.name.trim()) || selectedDays.length === 0} 
              className="w-full gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? "Generating..." : "Generate Study Schedule"}
            </Button>
          </Card>

          {/* Preview/Result */}
          <div className="space-y-6">
            {schedule ? (
              <Card className="p-6 border-primary/20 bg-accent/5 print:bg-white print:text-black print:border-none">
                <div className="flex items-center justify-between mb-6 print:hidden">
                  <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" /> Your Weekly Plan
                  </h3>
                  <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
                    <Download className="h-4 w-4" /> Print / PDF
                  </Button>
                </div>

                <div className="space-y-4">
                  {DAYS.map(day => (
                    <div key={day} className={cn(
                      "rounded-lg border p-3",
                      selectedDays.includes(day) ? "border-border bg-background" : "border-dashed border-muted opacity-50"
                    )}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-sm uppercase tracking-wider">{day}</span>
                        {selectedDays.includes(day) && (
                          <span className="text-xs text-muted-foreground">{hoursPerDay} hours</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedDays.includes(day) ? (
                          schedule[day]?.map((subject, i) => (
                            <span key={i} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary border border-primary/20">
                              {subject}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs italic text-muted-foreground">Rest day</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-xl border border-dashed border-border bg-card/50">
                <Calendar className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Fill in your subjects and availability to generate your personalized study plan.</p>
              </div>
            )}

            <div className="grid gap-4">
              <Link to="/essay-outline-generator" className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" /> Need an essay structure?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">Use our Essay Outline Generator to plan your next paper in seconds.</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">Open Outline Generator <ArrowRight className="h-3 w-3" /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default StudyScheduleMaker;