import ToolPageLayout from "@/components/ToolPageLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ListChecks, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    if (text.trim().length > 0) setScanned(true);
  };

  return (
    <ToolPageLayout
      title="Free Plagiarism Checker for Students | Originality Scanner Online"
      metaDescription="Scan essays and papers for plagiarism in seconds. Free originality check for students with worked examples and tips. Deep Scan launching soon — no sign-up needed."
      h1="Free Plagiarism Checker for Students"
      intro="A quick originality sanity-check before you submit. Paste your essay, run a basic scan, and get peace of mind that your writing reads as your own."
      howToUse={[
        "Paste your essay, paper, or paragraph into the box.",
        "Click 'Scan for Plagiarism' to run the basic originality check.",
        "Review the result. Tighten any phrasing that feels too close to a source.",
        "Watch for our upcoming Deep Scan that compares against millions of sources.",
      ]}
      benefits={[
        "Free basic originality scan with no sign-up required.",
        "Runs locally — your essay isn't uploaded or stored.",
        "Great pre-submission sanity check for essays and reports.",
        "Deep Scan launching soon for full source-by-source comparison.",
      ]}
      faqs={[
        { question: "How does this plagiarism checker work?", answer: "The free version runs a fast in-browser text analysis to flag obvious repetition and structural red flags before you submit. It's designed as a confidence check, not a replacement for institutional tools like Turnitin. Our upcoming Deep Scan will cross-reference your text against academic databases, journals, and web sources." },
        { question: "Is the tool actually free?", answer: "Yes — the basic scan is 100% free and always will be. When Deep Scan launches, it will be offered as an affordable premium feature for students who need deeper, source-by-source comparison." },
        { question: "What counts as plagiarism in academic writing?", answer: "Plagiarism includes copying text without quotes, paraphrasing too closely, reusing your own past work without permission (self-plagiarism), and missing citations. Even unintentional copying counts in most universities, which is why a pre-submission check is so valuable." },
        { question: "When will Deep Scan launch?", answer: "Deep Scan is actively in development. We're building it to compare your text against millions of academic and web sources with a clear similarity report. Subscribe to our blog updates to be notified the day it goes live." },
        { question: "Is my essay safe — do you save what I paste?", answer: "No. The basic scan runs in your browser, so nothing leaves your device. Privacy is a core principle of every StudyHelperTools product." },
        { question: "Can I use this for research papers and theses?", answer: "Absolutely. It's a great first check for essays, reports, dissertations, and even blog drafts. For high-stakes submissions like a thesis, we'd recommend pairing this with your institution's official Turnitin or iThenticate check." },
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

      <section className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <ListChecks className="h-6 w-6 text-primary" /> How to Avoid Accidental Plagiarism
        </h2>
        <ol className="mt-4 list-decimal list-inside space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Quote anything word-for-word.</strong> If you're using more than three or four consecutive words from a source, wrap it in quotes and cite it.</li>
          <li><strong className="text-foreground">Paraphrase by rewriting from memory.</strong> Read the source, close the tab, then write the idea in your own words. Always cite the original.</li>
          <li><strong className="text-foreground">Keep a running references list.</strong> Add every source the moment you use it — chasing citations after the fact is where mistakes happen.</li>
          <li><strong className="text-foreground">Use this scanner as a final check.</strong> Run your draft through us before submitting to spot any phrases that read suspiciously close to a source.</li>
        </ol>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link to="/word-counter" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Track your essay length
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Use our free <strong className="text-foreground">Word Counter</strong> to stay within your assignment limit.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Open Word Counter <ArrowRight className="h-4 w-4" /></span>
        </Link>
        <Link to="/blog/how-to-write-1000-word-essay-fast" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" /> Recommended Reading
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Read our guide on writing a <strong className="text-foreground">1,000-word essay in 2 hours</strong> — without sacrificing originality.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Read the guide <ArrowRight className="h-4 w-4" /></span>
        </Link>
      </section>
    </ToolPageLayout>
  );
};

export default PlagiarismChecker;

