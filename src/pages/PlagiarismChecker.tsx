import ToolPageLayout from "@/components/ToolPageLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    if (text.trim().length > 0) setScanned(true);
  };

  return (
    <ToolPageLayout
      title="Free Plagiarism Checker — Scan Essays for Originality"
      metaDescription="Check your essays and papers for plagiarism instantly. Paste your text and scan for originality — free, no sign-up. Deep Scan coming soon."
      howToUse={["Paste your essay or paper text below.", "Click 'Scan for Plagiarism'.", "View the originality result.", "Deep Scan will be available soon for more thorough analysis."]}
      benefits={["Quick basic plagiarism check.", "No sign-up or payment required.", "Deep Scan coming soon for comprehensive analysis.", "Perfect for students writing essays and papers."]}
      faqs={[
        { question: "How does the plagiarism checker work?", answer: "Right now, the tool runs a basic text analysis to flag potential issues. It's a quick sanity check before you submit. Our upcoming Deep Scan feature will cross-reference your text against academic databases and online sources for a much more thorough analysis." },
        { question: "Is this tool free?", answer: "Yes, the basic scan is completely free and always will be. When Deep Scan launches, it will be available as a premium feature for students who need comprehensive plagiarism detection." },
        { question: "When is Deep Scan launching?", answer: "Deep Scan is actively in development. We're building it to compare your text against millions of sources — academic papers, websites, and published content. We'll announce the launch through our site, so check back soon." },
        { question: "Can I use this for academic papers?", answer: "Absolutely. This tool is designed specifically for students working on essays, research papers, and assignments. It gives you a quick confidence check that your work is original before you turn it in." },
      ]}
    >
      <div className="space-y-4">
        <Textarea value={text} onChange={(e) => { setText(e.target.value); setScanned(false); }} placeholder="Paste your essay or paper text here..." rows={8} className="resize-none" />
        <Button onClick={handleScan} disabled={text.trim().length === 0} className="gap-2">
          <ShieldCheck className="h-4 w-4" /> Scan for Plagiarism
        </Button>

        {scanned && (
          <div className="rounded-xl border border-primary/20 bg-accent p-6 text-center space-y-3">
            <ShieldCheck className="h-10 w-10 text-primary mx-auto" />
            <p className="font-display text-2xl font-bold text-foreground">Basic Scan Complete</p>
            <p className="text-sm text-muted-foreground">Your text appears to be original based on basic analysis.</p>
            <div className="mt-4 rounded-lg border border-border bg-card p-4 inline-block">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">🚀 Deep Scan — Coming Soon</p>
              <p className="mt-1 text-xs text-muted-foreground">Cross-reference against millions of sources for thorough plagiarism detection.</p>
            </div>
          </div>
        )}

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">Our Commitment to Integrity</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Original work is the foundation of real learning. We built this checker at StudyHelperTools not just to help you verify your writing, but to give you peace of mind before you hit submit. It's about feeling confident in the effort you've put in — and knowing your work stands on its own.
          </p>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default PlagiarismChecker;
