import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";
import { useState } from "react";

interface Semester {
  gpa: string;
  credits: string;
}

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    { gpa: "", credits: "" },
    { gpa: "", credits: "" },
  ]);

  const updateSemester = (i: number, field: keyof Semester, value: string) => {
    const updated = [...semesters];
    updated[i] = { ...updated[i], [field]: value };
    setSemesters(updated);
  };

  const addSemester = () => setSemesters([...semesters, { gpa: "", credits: "" }]);

  const removeSemester = (i: number) => {
    if (semesters.length <= 1) return;
    setSemesters(semesters.filter((_, idx) => idx !== i));
  };

  const cgpa = (() => {
    let totalPoints = 0, totalCredits = 0;
    semesters.forEach((s) => {
      const gpa = parseFloat(s.gpa) || 0;
      const cr = parseFloat(s.credits) || 0;
      totalPoints += gpa * cr;
      totalCredits += cr;
    });
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  })();

  return (
    <ToolPageLayout
      title="Free CGPA Calculator — Cumulative GPA Across Semesters"
      metaDescription="Calculate your cumulative GPA (CGPA) across multiple semesters. Enter each semester's GPA and credit hours to get your overall academic standing — 100% free."
      howToUse={[
        "Enter the GPA you earned each semester.",
        "Enter the total credit hours for that semester.",
        "Add more semesters as needed.",
        "Your cumulative GPA updates instantly.",
      ]}
      benefits={[
        "Tracks your academic progress across your entire degree.",
        "Handles any number of semesters.",
        "Gives you a clear picture of where you stand overall.",
        "Completely free — no account needed.",
      ]}
      faqs={[
        { question: "What's the difference between GPA and CGPA?", answer: "Your GPA is the grade point average for a single semester. Your CGPA (Cumulative GPA) is the weighted average of all your semester GPAs, giving you an overall picture of your academic performance across your entire program." },
        { question: "How do I calculate CGPA manually?", answer: "Multiply each semester's GPA by its credit hours, add all of those up, and then divide by the total credit hours. That gives you the weighted average — your CGPA. This tool does that math for you automatically." },
        { question: "Does this work for any university grading system?", answer: "This calculator works with the standard 4.0 scale used by most American universities. If your school uses a different scale (like 5.0 or 10.0), you can still use it — just enter your GPAs on whatever scale your institution uses." },
        { question: "Can I use this for graduate school applications?", answer: "Absolutely. Many grad school applications ask for your cumulative GPA. This tool helps you calculate it quickly so you can fill out applications with confidence." },
      ]}
    >
      <div className="space-y-6 max-w-lg">
        {semesters.map((sem, i) => (
          <div key={i} className="flex items-end gap-3">
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground">Semester {i + 1} GPA</label>
              <Input type="number" step="0.01" min="0" max="4" value={sem.gpa} onChange={(e) => updateSemester(i, "gpa", e.target.value)} placeholder="e.g. 3.5" className="mt-1" />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground">Credit Hours</label>
              <Input type="number" min="0" max="30" value={sem.credits} onChange={(e) => updateSemester(i, "credits", e.target.value)} placeholder="e.g. 15" className="mt-1" />
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeSemester(i)} disabled={semesters.length <= 1}>
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        ))}

        <Button variant="outline" size="sm" onClick={addSemester} className="gap-1">
          <Plus className="h-3.5 w-3.5" /> Add Semester
        </Button>

        <div className="rounded-xl border border-primary/20 bg-accent p-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">Your Cumulative GPA</p>
          <p className="font-display text-4xl font-bold text-primary">{cgpa.toFixed(2)}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">Why Tracking CGPA Matters</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Your cumulative GPA tells a bigger story than any single semester can. It's the number that shows up on your transcript, the one grad schools and employers look at first. Keeping tabs on it throughout your degree helps you set realistic goals and course-correct early if needed. We built this tool so you can check in on your progress in seconds — no spreadsheets, no guesswork.
          </p>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default CGPACalculator;
