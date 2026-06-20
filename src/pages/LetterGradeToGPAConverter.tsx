import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, Plus, Calculator, ArrowRight, BookOpen, Info } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const gradePoints: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0
};

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: string;
}

const LetterGradeToGPAConverter = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "Course 1", grade: "A", credits: "3" }
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: Math.random().toString(36).substr(2, 9), name: `Course ${courses.length + 1}`, grade: "A", credits: "3" }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : s));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach(c => {
      const cr = parseFloat(c.credits) || 0;
      totalPoints += (gradePoints[c.grade] || 0) * cr;
      totalCredits += cr;
    });
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  };

  const finalGPA = calculateGPA();

  return (
    <ToolPageLayout
      title="Letter Grade to GPA Converter | Free GPA Calculator"
      metaDescription="Convert your letter grades (A, B, C, etc.) to the standard 4.0 GPA scale instantly. Free weighted GPA converter for college and university students."
      h1="Letter Grade to GPA Converter"
      intro="Easily translate your course grades into GPA points. Enter your letter grades and credit hours to calculate your weighted semester average on the standard 4.0 scale."
      howToUse={[
        "Select your letter grade for each course from the dropdown menu.",
        "Enter the number of credit hours or units for each course.",
        "Add as many courses as you need using the 'Add Course' button.",
        "Review the breakdown table to see individual GPA points.",
        "Your final weighted GPA is calculated automatically at the bottom."
      ]}
      benefits={[
        "Uses the standard 4.0 GPA scale accepted by most US universities.",
        "Calculates weighted GPA based on credit hours for accuracy.",
        "Provides a clear breakdown of points per course.",
        "100% free, private, and requires no sign-up."
      ]}
      faqs={[
        { question: "What is a B+ in GPA?", answer: "On the standard 4.0 scale, a B+ is equivalent to 3.3 grade points. It is considered a strong grade, typically representing a percentage between 87% and 89%." },
        { question: "How do I convert my letter grades to GPA?", answer: "To convert manually, assign points to each grade (A=4, B=3, etc.), multiply by credits, sum them up, and divide by total credits. Or, simply use this tool to do the math for you instantly!" },
        { question: "Does an A+ give more points than an A?", answer: "In most standard 4.0 systems, both an A and an A+ are worth 4.0 points. However, some schools use a 4.3 scale where an A+ is worth more. This tool uses the standard 4.0 scale." },
        { question: "What is a passing grade in GPA points?", answer: "Generally, a D (1.0 point) is the lowest passing grade. An F (0.0 points) is a failing grade and significantly impacts your overall average." }
      ]}
    >
      <div className="space-y-8 max-w-4xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <Card className="p-6 border-border bg-card">
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="grid grid-cols-[1fr_100px_80px_40px] gap-3 items-end">
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Course Name</Label>
                      <Input 
                        value={course.name} 
                        onChange={(e) => updateCourse(course.id, "name", e.target.value)} 
                        placeholder="e.g. Biology" 
                        className="h-9"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Grade</Label>
                      <Select value={course.grade} onValueChange={(v) => updateCourse(course.id, "grade", v)}>
                        <SelectTrigger className="h-9">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(gradePoints).map(g => (
                            <SelectItem key={g} value={g}>{g}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Credits</Label>
                      <Input 
                        type="number" 
                        value={course.credits} 
                        onChange={(e) => updateCourse(course.id, "credits", e.target.value)} 
                        className="h-9"
                      />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeCourse(course.id)}
                      className="h-9 w-9 text-muted-foreground hover:text-destructive"
                      disabled={courses.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={addCourse} className="w-full gap-2 mt-2">
                  <Plus className="h-4 w-4" /> Add Another Course
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card overflow-hidden">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" /> Grade Breakdown
              </h3>
              <div className="rounded-md border border-border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead className="text-center">Grade</TableHead>
                      <TableHead className="text-center">Points</TableHead>
                      <TableHead className="text-right">Credits</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((c) => (
                      <TableRow key={c.id}>
                        <TableCell className="font-medium">{c.name || "Untitled"}</TableCell>
                        <TableCell className="text-center">{c.grade}</TableCell>
                        <TableCell className="text-center">{(gradePoints[c.grade] || 0).toFixed(1)}</TableCell>
                        <TableCell className="text-right">{c.credits || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-primary/20 bg-accent/5 text-center sticky top-24">
              <Calculator className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Your Calculated GPA</p>
              <p className="mt-2 font-display text-5xl font-bold text-primary">{finalGPA.toFixed(2)}</p>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Based on {courses.reduce((acc, c) => acc + (parseFloat(c.credits) || 0), 0)} total credit hours.
              </p>
            </Card>

            <div className="space-y-4">
              <Link to="/gpa-calculator" className="group block p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Related Tool</p>
                <h4 className="mt-1 font-display font-semibold text-foreground flex items-center justify-between">
                  GPA Calculator <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </h4>
              </Link>
              <Link to="/cgpa-calculator" className="group block p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Related Tool</p>
                <h4 className="mt-1 font-display font-semibold text-foreground flex items-center justify-between">
                  CGPA Calculator <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </h4>
              </Link>
            </div>
          </div>
        </div>

        <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" /> How the 4.0 GPA Scale Works
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The 4.0 scale is the most common grading system used in the United States and many international institutions. It converts letter grades into numerical values to provide a standardized measure of academic achievement.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { g: "A / A+", p: "4.0" }, { g: "A-", p: "3.7" },
              { g: "B+", p: "3.3" }, { g: "B", p: "3.0" },
              { g: "B-", p: "2.7" }, { g: "C+", p: "2.3" },
              { g: "C", p: "2.0" }, { g: "F", p: "0.0" }
            ].map(item => (
              <div key={item.g} className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="block font-bold text-foreground">{item.g}</span>
                <span className="text-sm text-primary font-medium">{item.p} Points</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
};

export default LetterGradeToGPAConverter;