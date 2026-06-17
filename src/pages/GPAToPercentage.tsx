import ToolPageLayout from "@/components/ToolPageLayout";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Globe, ListChecks } from "lucide-react";
import { useState } from "react";

const GPAToPercentage = () => {
  const [gpa, setGpa] = useState("");

  const gpaNum = parseFloat(gpa) || 0;
  const percentage = Math.min(100, Math.max(0, (gpaNum / 4.0) * 100));

  return (
    <ToolPageLayout
      title="Free GPA to Percentage Converter | 4.0 Scale Calculator Online"
      metaDescription="Convert your GPA to percentage instantly on the 4.0 scale. See worked examples, global conversion standards (US, India, Europe) and a clear formula breakdown — 100% free."
      h1="Free GPA to Percentage Converter"
      intro="Turn any GPA on a 4.0 scale into a clean percentage in one tap. Built for students applying to universities, scholarships, and jobs that ask for marks instead of a GPA."
      howToUse={[
        "Type your GPA into the box (anything between 0.0 and 4.0).",
        "Read the percentage equivalent that appears instantly below.",
        "Scroll down for the formula, worked examples, and global standards.",
      ]}
      benefits={[
        "Instant, accurate conversion on the standard 4.0 scale.",
        "Worked examples so you understand the math, not just the answer.",
        "Covers US, Indian, and European conversion conventions.",
        "100% free, no sign-up, runs entirely in your browser.",
      ]}
      faqs={[
        { question: "What is the standard formula to convert GPA to percentage?", answer: "The most widely used formula is: Percentage = (GPA ÷ 4.0) × 100. So a 3.5 GPA becomes (3.5 ÷ 4.0) × 100 = 87.5%. This linear conversion is what most US universities and international evaluators default to." },
        { question: "How do I convert a 4.0 GPA to percentage?", answer: "A perfect 4.0 on a 4.0 scale is treated as 100%. From there, every 0.1 GPA roughly equals 2.5%. So 3.8 GPA ≈ 95%, 3.5 GPA ≈ 87.5%, and 3.0 GPA ≈ 75%." },
        { question: "Is the GPA to percentage formula the same in India?", answer: "Not quite. Many Indian universities (especially CBSE and engineering colleges) use the multiplier 9.5 on a 10-point CGPA — Percentage = CGPA × 9.5. If your GPA is already on a 4.0 scale, use our standard formula above; if it's on a 10.0 scale, multiply by 9.5 instead." },
        { question: "How accurate is this for international university applications?", answer: "For schools that accept the standard 4.0 conversion, it's spot on. Some universities (mostly in the UK, Germany, and Australia) use their own internal conversion charts. Always double-check the admissions page of your target school before submitting." },
        { question: "Why would I need a percentage if my transcript already shows a GPA?", answer: "Scholarship forms, government job applications, visa paperwork, and many international portals ask for marks as a percentage. Converting once and noting the number down saves you from doing the math under pressure later." },
        { question: "Does this tool store the GPA I enter?", answer: "No. The conversion happens entirely in your browser — nothing is uploaded, logged, or saved on our servers. Your data stays with you." },
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
      </div>

      {/* How It Works */}
      <section className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" /> How It Works: The Math Behind the Conversion
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          The 4.0 GPA scale is a linear system — every grade point corresponds to a fixed percentage range. To translate one to the other, you simply scale your GPA back up to a 100-point system.
        </p>

        <div className="mt-5 rounded-xl bg-primary/10 p-4 md:p-5">
          <p className="font-display text-base font-semibold text-foreground">Standard Formula</p>
          <p className="mt-1 font-mono text-foreground">Percentage = ( GPA ÷ 4.0 ) × 100</p>
        </div>

        <h3 className="mt-6 font-display text-lg font-semibold text-foreground">Step-by-Step Example</h3>
        <p className="mt-2 text-muted-foreground">Let's say your GPA is <strong className="text-foreground">3.6</strong>. Here's exactly how the math plays out:</p>
        <ol className="mt-3 list-decimal list-inside space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Divide your GPA by 4.0:</strong> 3.6 ÷ 4.0 = 0.9</li>
          <li><strong className="text-foreground">Multiply the result by 100:</strong> 0.9 × 100 = <span className="text-primary font-semibold">90%</span></li>
          <li><strong className="text-foreground">Round if needed:</strong> a 3.6 GPA is equivalent to <strong className="text-foreground">90%</strong>.</li>
        </ol>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-background">
              <tr className="text-left text-foreground">
                <th className="px-4 py-3 font-semibold">GPA (4.0 scale)</th>
                <th className="px-4 py-3 font-semibold">Percentage</th>
                <th className="px-4 py-3 font-semibold">Letter Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr><td className="px-4 py-3 font-medium text-foreground">4.0</td><td className="px-4 py-3">100%</td><td className="px-4 py-3">A+</td></tr>
              <tr><td className="px-4 py-3 font-medium text-foreground">3.7</td><td className="px-4 py-3">92.5%</td><td className="px-4 py-3">A</td></tr>
              <tr><td className="px-4 py-3 font-medium text-foreground">3.3</td><td className="px-4 py-3">82.5%</td><td className="px-4 py-3">B+</td></tr>
              <tr><td className="px-4 py-3 font-medium text-foreground">3.0</td><td className="px-4 py-3">75%</td><td className="px-4 py-3">B</td></tr>
              <tr><td className="px-4 py-3 font-medium text-foreground">2.7</td><td className="px-4 py-3">67.5%</td><td className="px-4 py-3">C+</td></tr>
              <tr><td className="px-4 py-3 font-medium text-foreground">2.0</td><td className="px-4 py-3">50%</td><td className="px-4 py-3">C</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Global standards */}
      <section className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" /> Global Conversion Standards
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">United States</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Uses the 4.0 scale directly. The standard linear formula (GPA ÷ 4.0 × 100) is the universally accepted conversion.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">India & South Asia</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Many universities use a 10.0 CGPA scale and apply <strong className="text-foreground">Percentage = CGPA × 9.5</strong> (CBSE, AICTE convention). For a 4.0-scale GPA, the standard formula still applies.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Europe</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              The UK uses degree classifications and most EU schools use ECTS grades or local percentage scales. Conversion is usually handled by the admissions office using country-specific charts.
            </p>
          </div>
        </div>
      </section>

      {/* Interlink */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link to="/gpa-calculator" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" /> Don't know your GPA yet?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Use our free <strong className="text-foreground">GPA / SGPA Calculator</strong> to work out your semester GPA first.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Open GPA Calculator <ArrowRight className="h-4 w-4" /></span>
        </Link>
        <Link to="/blog/difference-between-gpa-and-cgpa-guide" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-primary" /> Recommended Reading
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Confused between GPA and CGPA? Read our <strong className="text-foreground">Ultimate Guide for International Students</strong>.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Read the guide <ArrowRight className="h-4 w-4" /></span>
        </Link>
      </section>
    </ToolPageLayout>
  );
};

export default GPAToPercentage;
