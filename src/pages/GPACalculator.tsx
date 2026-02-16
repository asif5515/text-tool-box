import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { useState } from "react";

const gradePoints: Record<string, number> = { "A+": 4.0, A: 4.0, "A-": 3.7, "B+": 3.3, B: 3.0, "B-": 2.7, "C+": 2.3, C: 2.0, "C-": 1.7, "D+": 1.3, D: 1.0, "D-": 0.7, F: 0.0 };

interface Course { grade: string; credits: string }
interface Semester { name: string; courses: Course[] }

const emptyCourse = (): Course => ({ grade: "A", credits: "3" });
const emptySemester = (n: number): Semester => ({ name: `Semester ${n}`, courses: [emptyCourse()] });

const GPACalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([emptySemester(1)]);

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
      title="Best Free GPA Calculator USA"
      metaDescription="Calculate your GPA on a 4.0 scale for free. Add multiple semesters, see cumulative GPA, and save results as PDF."
      howToUse={["Select a letter grade for each course.", "Enter the credit hours.", "Add more courses or semesters as needed.", "View your semester and cumulative GPA instantly.", "Click 'Save as PDF' to download your results."]}
      benefits={["Supports 4.0 scale grading system used by US universities.", "Multi-semester tracking for cumulative GPA.", "No sign-up required — completely free.", "Export to PDF for your records."]}
      faqs={[
        { question: "How is GPA calculated on a 4.0 scale?", answer: "Each letter grade is assigned a point value (A=4.0, B=3.0, etc.). The GPA is the weighted average of grade points by credit hours." },
        { question: "Can I calculate GPA for multiple semesters?", answer: "Yes! Click 'Add Semester' to track multiple semesters and see your cumulative GPA." },
        { question: "Is this GPA calculator accurate for all US universities?", answer: "This calculator uses the standard 4.0 scale. Some universities may use variations, so check with your registrar." },
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
      </div>
    </ToolPageLayout>
  );
};

export default GPACalculator;
