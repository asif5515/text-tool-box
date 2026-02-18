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
        { question: "What is Title Case?", answer: "Title Case capitalizes the first letter of each word and lowercases the rest." },
        { question: "Is there a character limit?", answer: "No. You can convert text of any length." },
        { question: "Do I need to sign up?", answer: "No sign-up required. The tool is completely free." },
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
      </div>
    </ToolPageLayout>
  );
};

export default CaseConverter;
