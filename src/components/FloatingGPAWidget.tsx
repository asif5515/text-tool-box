import { useState } from "react";
import { Calculator, X, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const gradePoints: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, "D": 1.0, "F": 0.0,
};

interface Course { grade: string; credits: string }

const FloatingGPAWidget = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([
    { grade: "A", credits: "3" },
    { grade: "B+", credits: "3" },
  ]);
  const [result, setResult] = useState<number | null>(null);

  const addCourse = () => setCourses([...courses, { grade: "A", credits: "3" }]);
  const removeCourse = (i: number) => setCourses(courses.filter((_, idx) => idx !== i));
  const updateCourse = (i: number, field: keyof Course, val: string) => {
    const next = [...courses];
    next[i] = { ...next[i], [field]: val };
    setCourses(next);
  };

  const calculate = () => {
    let totalPoints = 0, totalCredits = 0;
    courses.forEach(c => {
      const cr = parseFloat(c.credits) || 0;
      totalPoints += (gradePoints[c.grade] ?? 0) * cr;
      totalCredits += cr;
    });
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setResult(parseFloat(gpa.toFixed(2)));
    if (gpa >= 3.5) {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.8, x: 0.9 }, colors: ["#22c55e", "#38a169", "#fbbf24"] });
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 w-80 rounded-xl border border-border bg-card p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-sm font-semibold text-foreground">Quick GPA Calc</h3>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {courses.map((c, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <Select value={c.grade} onValueChange={(v) => updateCourse(i, "grade", v)}>
                    <SelectTrigger className="w-20 h-8 text-xs"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.keys(gradePoints).map(g => (
                        <SelectItem key={g} value={g}>{g}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    className="w-16 h-8 text-xs"
                    type="number"
                    min="1"
                    max="6"
                    value={c.credits}
                    onChange={(e) => updateCourse(i, "credits", e.target.value)}
                    placeholder="Cr"
                  />
                  {courses.length > 1 && (
                    <button onClick={() => removeCourse(i)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              <Button variant="outline" size="sm" onClick={addCourse} className="text-xs gap-1 flex-1">
                <Plus className="h-3 w-3" /> Add
              </Button>
              <Button size="sm" onClick={calculate} className="text-xs flex-1">Calculate</Button>
            </div>

            {result !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 rounded-lg bg-accent p-3 text-center"
              >
                <p className="text-xs text-muted-foreground">Your GPA</p>
                <p className="font-display text-2xl font-bold text-primary">{result}</p>
                {result >= 3.5 && <p className="text-xs text-primary mt-1">🎉 Excellent work!</p>}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg glow-effect"
        aria-label="Quick GPA Calculator"
      >
        <Calculator className="h-5 w-5" />
      </motion.button>
    </>
  );
};

export default FloatingGPAWidget;
