import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        { question: "What is a good CGPA for Master's applications?", answer: "Most top universities abroad look for a CGPA of 3.0+ on a 4.0 scale (or roughly 7.5+ on a 10-point scale) for Master's programs. Top-tier schools like Ivy Leagues or Oxbridge usually expect 3.5+ (8.0+/10). That said, a strong CGPA isn't everything — research, recommendations, and your statement of purpose carry real weight too." },
        { question: "How to convert CGPA to GPA?", answer: "If your CGPA is on a 10-point scale, the most common conversion is CGPA × 0.4 = GPA on a 4.0 scale. So a 7.5 CGPA roughly equals a 3.0 GPA. Some universities use their own formulas though — always check the specific school's admissions page for the conversion they accept." },
        { question: "Is 7.5 CGPA good?", answer: "Yes — a 7.5 CGPA on a 10-point scale is generally considered good and translates to roughly a 3.0 GPA or a First Class with Distinction in many systems. It's a solid score for most Master's applications, including many universities in the US, UK, Canada, and Australia." },
        { question: "What's the difference between GPA and CGPA?", answer: "GPA is the grade point average for a single semester. CGPA (Cumulative GPA) is the weighted average across all your semesters, giving the overall picture of your academic performance throughout your degree." },
        { question: "How do I calculate CGPA manually?", answer: "Multiply each semester's GPA by its credit hours, add them all together, and divide by the total credit hours across all semesters. That weighted average is your CGPA — and this tool does the math for you in real time." },
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

        <Link
          to="/gpa-calculator"
          className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent"
        >
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Just need this semester's number?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Calculate your current semester performance with our GPA Calculator.
            </p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">Recommended Reading</h2>
          </div>
          <Link
            to="/blog/difference-between-gpa-and-cgpa-guide"
            className="mt-3 block rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-primary">Academic Guide</p>
            <p className="mt-1 font-display text-base font-semibold text-foreground">
              GPA vs CGPA: The Ultimate Guide for International Students
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              A clear, friendly walkthrough of how GPA and CGPA differ, why both matter, and what international admissions teams actually look for.
            </p>
          </Link>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default CGPACalculator;
