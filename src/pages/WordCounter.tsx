import ToolPageLayout from "@/components/ToolPageLayout";
import { Textarea } from "@/components/ui/textarea";
import CopyButton from "@/components/CopyButton";
import FAQSection from "@/components/FAQSection";
import { FileText, BarChart3, Copy, ListChecks } from "lucide-react";
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

        <section className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Why Our Student-First Word Counter is Different?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              In the world of strict academic deadlines, every word counts. Whether you are drafting a UCAS Personal Statement, a 1000-word university essay, or a quick LinkedIn post, maintaining the right length is crucial.
            </p>
            <p>
              Our tool doesn't just count characters; it helps you stay within the <strong className="text-foreground">"Goldilocks Zone"</strong>—not too long, not too short.
            </p>
            <div className="rounded-xl bg-primary/10 p-4 md:p-5">
              <p className="font-semibold text-foreground">Pro Tip for Students:</p>
              <p className="mt-1">
                Most professors allow a 10% margin on word counts. If your limit is 2000 words, staying between 1800-2200 is usually safe. Use our real-time paragraph and sentence tracker to ensure your writing remains crisp and professional.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <ListChecks className="w-6 h-6 text-primary" />
            How to Use This Tool
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: FileText, step: "Step 1", text: "Paste your text or essay into the box above." },
              { icon: BarChart3, step: "Step 2", text: "Check the real-time stats for words, characters, and sentences instantly." },
              { icon: Copy, step: "Step 3", text: "Use the 'Copy' button to take your text back once you've reached your target." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center p-4 rounded-xl bg-background/50 border border-border/50">
                <item.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-primary">{item.step}</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection
          pageTitle="Free Online Word Counter for Students"
          faqs={[
            { question: "Is this word counter accurate for academic essays?", answer: "Yes! We use a standard white-space counting algorithm that matches Google Docs and Microsoft Word's accuracy." },
            { question: "Does this tool save my data?", answer: "No. We value your privacy. Your text stays in your browser and is never stored on our servers." },
            { question: "Can I use this for social media posts?", answer: "Absolutely. It's perfect for tracking character limits for Twitter (X), LinkedIn, and Instagram." },
          ]}
        />
      </div>
    </ToolPageLayout>
  );
};

export default WordCounter;
