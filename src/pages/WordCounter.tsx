import ToolPageLayout from "@/components/ToolPageLayout";
import { Textarea } from "@/components/ui/textarea";
import CopyButton from "@/components/CopyButton";
import { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter((p) => p.trim()).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <ToolPageLayout
      title="Free Word Counter — Characters, Sentences & Reading Time"
      metaDescription="Count words, characters, sentences, and paragraphs in real-time. Includes reading time estimates. Free online word counter — no sign-up needed."
      howToUse={["Paste or type your text in the box below.", "Stats update in real-time.", "Copy your text with one click."]}
      benefits={["Real-time word and character counting.", "Estimated reading time based on 200 WPM.", "Tracks sentences and paragraphs.", "No sign-up required."]}
      faqs={[
        { question: "How is reading time calculated?", answer: "Reading time is estimated at 200 words per minute, the average adult reading speed." },
        { question: "Does it count spaces?", answer: "We show both character count with and without spaces." },
        { question: "Is there a word limit?", answer: "No. The tool handles text of any length." },
      ]}
    >
      <div className="space-y-4">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Start typing or paste your text..." rows={8} className="resize-none" />
        {text && <div className="flex justify-end"><CopyButton text={text} /></div>}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Words", value: words },
            { label: "Characters", value: chars },
            { label: "No Spaces", value: charsNoSpace },
            { label: "Sentences", value: sentences },
            { label: "Paragraphs", value: paragraphs },
            { label: "Reading Time", value: `${readingTime} min` },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold font-display text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default WordCounter;
