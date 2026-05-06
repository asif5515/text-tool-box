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
      title="Free Online Word Counter for Students"
      metaDescription="Accurate word count tool for assignments and essays. Bypass AI detection with our student-focused writing tips."
      howToUse={["Paste or type your text in the box below.", "Stats update in real-time.", "Copy your text with one click."]}
      benefits={["Real-time word and character counting.", "Estimated reading time based on 200 WPM.", "Tracks sentences and paragraphs.", "No sign-up required."]}
      faqs={[
        { question: "How is reading time calculated?", answer: "We estimate reading time based on the widely accepted average of 200 words per minute. It's a rough guide — some people read faster, some slower — but it gives you a useful ballpark for how long your text will take someone to get through." },
        { question: "Does it count spaces?", answer: "We show both: total characters (which includes spaces) and a separate count without spaces. This is handy if you're working with a platform that has a strict character limit." },
        { question: "Is there a word limit?", answer: "Nope. You can paste as much text as you want — an entire essay, a thesis chapter, or even a novel draft. The tool handles it all in real-time without slowing down." },
        { question: "How are sentences counted?", answer: "The tool splits your text on common sentence-ending punctuation — periods, exclamation marks, and question marks. It's not perfect for edge cases like abbreviations (e.g., 'U.S.A.'), but it's accurate for typical writing." },
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
