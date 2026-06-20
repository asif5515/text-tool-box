import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus, ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const gradePoints: Record<string, number> = { "A+": 4.0, A: 4.0, "A-": 3.7, "B+": 3.3, B: 3.0, "B-": 2.7, "C+": 2.3, C: 2.0, "C-": 1.7, "D+": 1.3, D: 1.0, "D-": 0.7, F: 0.0 };

interface Course { grade: string; credits: string }
interface Semester { name: string; courses: Course[] }

const emptyCourse = (): Course => ({ grade: "A", credits: "3" });
const emptySemester = (n: number): Semester => ({ name: `Semester ${n}`, courses: [emptyCourse()] });

const GPACalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([emptySemester(1)]);

  useEffect(() => {
    document.title = "Free GPA & SGPA Calculator | Calculate Semester Grades Online";
  }, []);

  const updateCourse = (si: number, ci: number, field: keyof Course, value: string) => {
    const updated = [...semesters];
    updated[si].courses[ci] = { ...updated[si].courses[ci], [field]: value };
    setSemesters(updated);
  };

  const addCourse = (si: number) => {
    const updated = [...semesters];
    updated[si].courses.push(emptyCourse());
    setSemesters(updated);
  };

  const removeCourse = (si: number, ci: number) => {
    const updated = [...semesters];
    updated[si].courses.splice(ci, 1);
    if (updated[si].courses.length === 0) updated[si].courses.push(emptyCourse());
    setSemesters(updated);
  };

  const addSemester = () => setSemesters([...semesters, emptySemester(semesters.length + 1)]);

  const calcGPA = (courses: Course[]) => {
    let totalPoints = 0, totalCredits = 0;
    courses.forEach((c) => {
      const cr = parseFloat(c.credits) || 0;
      totalPoints += gradePoints[c.grade] * cr;
      totalCredits += cr;
    });
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  };

  const cumulativeGPA = calcGPA(semesters.flatMap((s) => s.courses));

  const handleSavePDF = () => {
    window.print();
  };

  return (
    <ToolPageLayout
      title="GPA / SGPA Calculator"
      metaDescription="Free GPA & SGPA Calculator | Calculate Semester Grades Online. Add multiple semesters, track cumulative GPA, and export results as PDF — 100% free, no sign-up."
      howToUse={["Select a letter grade for each course.", "Enter the credit hours.", "Add more courses or semesters as needed.", "View your semester and cumulative GPA instantly.", "Click 'Save as PDF' to download your results."]}
      benefits={["Supports 4.0 scale grading system used by US universities.", "Multi-semester tracking for cumulative GPA.", "No sign-up required — completely free.", "Export to PDF for your records."]}
      faqs={[
        { question: "How is GPA calculated?", answer: "Each letter grade is mapped to a point value on a 4.0 scale (A = 4.0, B = 3.0, and so on). Multiply each course's grade points by its credit hours, add everything together, and divide by the total credit hours. The result is your weighted GPA — exactly what this calculator does for you in real time." },
        { question: "What is the difference between weighted and unweighted GPA?", answer: "An unweighted GPA treats every class the same — an A is a 4.0 whether it's regular English or AP Calculus. A weighted GPA gives extra points for harder classes (like Honors or AP), so an A in an AP class might count as a 5.0. Most US colleges look at both, but the unweighted 4.0 GPA is the universal standard." },
        { question: "Can I convert GPA to percentage?", answer: "Yes — a rough rule is GPA × 25 to get an approximate percentage (so a 3.6 GPA ≈ 90%). But conversions vary by country and university. Check out our dedicated GPA to Percentage Converter for an accurate breakdown across different grading systems." },
        { question: "Can I calculate GPA for multiple semesters?", answer: "Absolutely. Click 'Add Semester' to create a new section. Each semester calculates independently, and your cumulative GPA at the bottom updates automatically across all of them." },
        { question: "Can I save my GPA results?", answer: "Use the 'Save as PDF' button to download a copy. If you sign up for a free account, we're rolling out the ability to save and track your GPA over time right from your dashboard." },
      ]}
    >
      <div className="space-y-8">
        {semesters.map((sem, si) => (
          <div key={si} className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-display text-lg font-semibold text-foreground">{sem.name}</h3>
            <div className="mt-4 space-y-3">
              {sem.courses.map((course, ci) => (
                <div key={ci} className="flex items-center gap-3">
                  <Select value={course.grade} onValueChange={(v) => updateCourse(si, ci, "grade", v)}>
                    <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.keys(gradePoints).map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Input type="number" min="0" max="12" value={course.credits} onChange={(e) => updateCourse(si, ci, "credits", e.target.value)} placeholder="Credits" className="w-24" />
                  <Button variant="ghost" size="icon" onClick={() => removeCourse(si, ci)}>
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={() => addCourse(si)} className="mt-3 gap-1">
              <Plus className="h-3.5 w-3.5" /> Add Course
            </Button>
            <div className="mt-4 text-sm font-medium text-foreground">
              Semester GPA: <span className="text-primary text-lg font-bold">{calcGPA(sem.courses).toFixed(2)}</span>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-3">
          <Button onClick={addSemester} variant="outline" className="gap-1">
            <Plus className="h-4 w-4" /> Add Semester
          </Button>
          <Button onClick={handleSavePDF} variant="outline">Save as PDF</Button>
        </div>

        <div className="rounded-xl border border-primary/20 bg-accent p-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">Cumulative GPA</p>
          <p className="font-display text-4xl font-bold text-primary">{cumulativeGPA.toFixed(2)}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            to="/letter-grade-to-gpa-converter"
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <div>
              <p className="font-display text-lg font-semibold text-foreground">
                Need to convert letter grades?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Use our dedicated Letter Grade to GPA Converter for a detailed breakdown.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/cgpa-calculator"
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <div>
              <p className="font-display text-lg font-semibold text-foreground">
                Calculate overall course result?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try our CGPA Calculator to weigh every semester into one final number.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

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
              Confused about how a single semester's GPA rolls into your final CGPA? This guide breaks it down for students applying abroad.
            </p>
          </Link>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default GPACalculator;