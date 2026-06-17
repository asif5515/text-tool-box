import ToolPageLayout from "@/components/ToolPageLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/CopyButton";
import { Link } from "react-router-dom";
import { ArrowRight, ListChecks, Sparkles, FileText } from "lucide-react";
import { useState } from "react";

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const convert = (type: "upper" | "lower" | "title" | "sentence") => {
    switch (type) {
      case "upper": setResult(text.toUpperCase()); break;
      case "lower": setResult(text.toLowerCase()); break;
      case "title": setResult(text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())); break;
      case "sentence": setResult(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())); break;
    }
  };

  return (
    <ToolPageLayout
      title="Free Online Case Converter | UPPERCASE, lowercase & Title Case"
      metaDescription="Instantly convert text to UPPERCASE, lowercase, Title Case, or Sentence case. Free online case converter for students, writers, and developers — no sign-up."
      h1="Free Online Case Converter"
      intro="Fix Caps Lock disasters, reformat headlines, and standardise titles in seconds. Paste your text, pick a case, and copy the result — that simple."
      howToUse={[
        "Paste or type your text into the input box.",
        "Pick a conversion: UPPERCASE, lowercase, Title Case, or Sentence case.",
        "Copy the cleaned-up text with one click and paste it wherever you need.",
      ]}
      benefits={[
        "Four conversion modes covering 99% of real-world formatting needs.",
        "Runs locally in your browser — your text never leaves your device.",
        "No character limit, no sign-up, no ads in your output.",
        "Works equally well for essay titles, code variables, and headlines.",
      ]}
      faqs={[
        { question: "What's the difference between Title Case and Sentence case?", answer: "Title Case capitalises the first letter of every word — used for book titles, headlines, and headings (e.g. 'The Quick Brown Fox'). Sentence case only capitalises the first letter of each sentence and proper nouns — used for body text and paragraphs (e.g. 'The quick brown fox jumps.')." },
        { question: "Is there a character or word limit?", answer: "None at all. Whether you paste a single sentence or an entire 10,000-word essay, the converter handles it instantly in your browser." },
        { question: "Does the tool save my text anywhere?", answer: "No. Everything runs locally on your device — no network requests, no logging, no storage. Close the tab and your text is gone." },
        { question: "Why is the converted text still showing original capitalisation in some words?", answer: "Title Case only capitalises the first letter of each word but preserves no other rules. If you want strict AP or Chicago style (which keep small words like 'of' and 'the' lowercase), you'll need to manually adjust after conversion." },
        { question: "Can I use this for coding (camelCase, snake_case)?", answer: "Right now the tool focuses on natural-language cases. For programming-specific transforms like camelCase, snake_case, or kebab-case, we'd recommend a dedicated developer utility — though our Title Case output is a good starting point." },
        { question: "Do I need an internet connection after the page loads?", answer: "Technically no. Once the page is loaded, the conversion logic runs entirely in your browser, so you can even use it offline." },
      ]}
    >
      <div className="space-y-4">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste or type your text here..." rows={6} className="resize-none" />
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => convert("upper")}>UPPERCASE</Button>
          <Button onClick={() => convert("lower")} variant="secondary">lowercase</Button>
          <Button onClick={() => convert("title")} variant="secondary">Title Case</Button>
          <Button onClick={() => convert("sentence")} variant="secondary">Sentence case</Button>
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

      {/* How It Works */}
      <section className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <ListChecks className="h-6 w-6 text-primary" /> How It Works
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Each conversion mode follows a simple, predictable rule so you always know what you'll get back:
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="font-display text-base font-semibold text-foreground">UPPERCASE</p>
            <p className="mt-1 text-sm text-muted-foreground">Every letter is capitalised. Good for emphasis, acronyms, and headings.</p>
            <p className="mt-2 text-xs font-mono text-muted-foreground">"hello world" → "HELLO WORLD"</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="font-display text-base font-semibold text-foreground">lowercase</p>
            <p className="mt-1 text-sm text-muted-foreground">Every letter becomes small. Useful for URL slugs, tags, and gentle tone.</p>
            <p className="mt-2 text-xs font-mono text-muted-foreground">"Hello World" → "hello world"</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="font-display text-base font-semibold text-foreground">Title Case</p>
            <p className="mt-1 text-sm text-muted-foreground">First letter of every word capitalised. Perfect for titles and headings.</p>
            <p className="mt-2 text-xs font-mono text-muted-foreground">"the quick brown fox" → "The Quick Brown Fox"</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="font-display text-base font-semibold text-foreground">Sentence case</p>
            <p className="mt-1 text-sm text-muted-foreground">Only the first letter of each sentence is capitalised. Ideal for body text.</p>
            <p className="mt-2 text-xs font-mono text-muted-foreground">"HELLO. how are you?" → "Hello. How are you?"</p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" /> Why Case Matters in Academic Writing
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Style guides like APA, MLA, and Chicago all have strict rules around capitalisation — and professors notice. Headings in Title Case, body paragraphs in Sentence case, and acronyms in UPPERCASE keep your essays looking polished. Instead of retyping a paragraph because Caps Lock was on, you can fix it in one click here and get back to writing.
        </p>
      </section>

      {/* Interlink */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link to="/word-counter" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Need to check your length?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Use our free <strong className="text-foreground">Word Counter</strong> to track words, characters, and reading time.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Open Word Counter <ArrowRight className="h-4 w-4" /></span>
        </Link>
        <Link to="/blog/how-to-write-1000-word-essay-fast" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Recommended Reading
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Learn how to draft a <strong className="text-foreground">1,000-word essay in 2 hours</strong> with our student survival guide.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Read the guide <ArrowRight className="h-4 w-4" /></span>
        </Link>
      </section>
    </ToolPageLayout>
  );
};

export default CaseConverter;
