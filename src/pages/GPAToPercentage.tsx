import ToolPageLayout from "@/components/ToolPageLayout";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const GPAToPercentage = () => {
  const [gpa, setGpa] = useState("");

  const gpaNum = parseFloat(gpa) || 0;
  const percentage = Math.min(100, Math.max(0, (gpaNum / 4.0) * 100));

  return (
    <ToolPageLayout
      title="Free GPA to Percentage Converter — Standard 4.0 Scale"
      metaDescription="Convert your GPA to a percentage instantly using the standard 4.0 scale formula. Clear breakdown and examples for US universities — 100% free."
      howToUse={["Enter your GPA on a 4.0 scale.", "See the percentage equivalent instantly.", "Read the formula explanation below."]}
      benefits={["Instant GPA to percentage conversion.", "Clear formula explanation for learning.", "Works with standard 4.0 scale.", "Free and requires no sign-up."]}
      faqs={[
        { question: "What formula is used for GPA to percentage conversion?", answer: "The standard formula is: Percentage = (GPA / 4.0) × 100. For example, a 3.5 GPA equals 87.5%." },
        { question: "Is this accurate for all universities?", answer: "This uses the standard linear conversion. Some universities may use non-linear scales, so always verify with your institution." },
        { question: "What is a 4.0 GPA in percentage?", answer: "A 4.0 GPA equals 100% using the standard conversion formula." },
      ]}
    >
      <div className="max-w-md space-y-6">
        <div>
          <label className="text-sm font-medium text-foreground">Enter Your GPA (0.0 – 4.0)</label>
          <Input type="number" step="0.01" min="0" max="4" value={gpa} onChange={(e) => setGpa(e.target.value)} placeholder="e.g. 3.5" className="mt-1" />
        </div>

        {gpa && (
          <div className="rounded-xl border border-primary/20 bg-accent p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">Percentage Equivalent</p>
            <p className="font-display text-4xl font-bold text-primary">{percentage.toFixed(1)}%</p>
          </div>
        )}

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">Formula Explained</h3>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <p><strong>Standard Formula:</strong> Percentage = (GPA ÷ 4.0) × 100</p>
            <p><strong>Example:</strong> If your GPA is 3.5, then: (3.5 ÷ 4.0) × 100 = <strong>87.5%</strong></p>
            <p>This is the most widely used linear conversion for the 4.0 GPA scale in the United States.</p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">Making Sense of the Numbers</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Converting your GPA can be confusing because different regions use different formulas. At StudyHelperTool, we've used the most standard academic calculation to give you a quick, reliable estimate. Whether you're applying for a job or a new course, we hope this tool makes the process a little easier for you.
          </p>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default GPAToPercentage;
