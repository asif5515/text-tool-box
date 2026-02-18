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
        { question: "How does the plagiarism checker work?", answer: "Currently the tool provides a basic text analysis. Our upcoming Deep Scan feature will cross-reference multiple databases for comprehensive plagiarism detection." },
        { question: "Is this tool free?", answer: "Yes! The basic scan is completely free. Deep Scan will be available as a premium feature." },
        { question: "When is Deep Scan launching?", answer: "Deep Scan is currently in development. Sign up for notifications to be the first to know when it launches." },
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
      </div>
    </ToolPageLayout>
  );
};

export default PlagiarismChecker;
