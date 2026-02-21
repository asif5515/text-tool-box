import ToolPageLayout from "@/components/ToolPageLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/CopyButton";
import { useState } from "react";

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const convert = (type: "upper" | "lower" | "title") => {
    switch (type) {
      case "upper": setResult(text.toUpperCase()); break;
      case "lower": setResult(text.toLowerCase()); break;
      case "title": setResult(text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())); break;
    }
  };

  return (
    <ToolPageLayout
      title="Free Case Converter — UPPERCASE, lowercase & Title Case"
      metaDescription="Convert any text to UPPERCASE, lowercase, or Title Case in one click. Fast, free online case converter — no sign-up required."
      howToUse={["Paste or type your text in the input box.", "Click one of the conversion buttons.", "Copy the result with one click."]}
      benefits={["Instant text conversion — no page reload.", "Supports UPPERCASE, lowercase, and Title Case.", "Copy to clipboard with one click.", "Works with any length of text."]}
      faqs={[
        { question: "What is Title Case?", answer: "Title Case capitalizes the first letter of each word and makes everything else lowercase. It's the standard for headlines, book titles, and formal document headers. For example, 'the quick brown fox' becomes 'The Quick Brown Fox'." },
        { question: "Is there a character limit?", answer: "Not at all. Whether it's a single line or an entire document, the converter handles text of any length without issues." },
        { question: "Do I need to sign up?", answer: "No sign-up, no email, no account needed. Just paste your text and convert. We believe useful tools shouldn't require you to hand over personal information." },
        { question: "Can I convert text back to its original format?", answer: "The tool doesn't store your original text, but since your input stays in the text box, you can always re-paste the original or try a different conversion at any time." },
      ]}
    >
      <div className="space-y-4">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste or type your text here..." rows={6} className="resize-none" />
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => convert("upper")}>UPPERCASE</Button>
          <Button onClick={() => convert("lower")} variant="secondary">lowercase</Button>
          <Button onClick={() => convert("title")} variant="secondary">Title Case</Button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-sm font-semibold text-foreground">Result</h3>
              <CopyButton text={result} />
            </div>
            <p className="whitespace-pre-wrap text-sm text-muted-foreground">{result}</p>
          </div>
        )}

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">Why Case Matters</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            We've all been there — you type out a whole paragraph only to realize caps lock was on, or you need to reformat a title for a submission. Retyping everything is tedious. We built this converter at StudyHelperTools so you can fix formatting in seconds and get back to the work that actually matters.
          </p>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default CaseConverter;
