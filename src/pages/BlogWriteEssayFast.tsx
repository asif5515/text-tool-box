import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, FileText, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";

const TITLE = "How to Write a 1,000-Word Essay in 2 Hours: A Student's Survival Guide";
const META_TITLE = "Write Essays Faster | StudyHelperTools";
const DESCRIPTION =
  "Master the art of fast essay writing with these 5 student-proven hacks. Use our free word counter to track your progress.";
const URL = "https://studyhelpertools.com/blog/how-to-write-1000-word-essay-fast";
const PUBLISHED = "2026-05-08";

const BlogWriteEssayFast = () => {
  useEffect(() => {
    document.title = META_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", DESCRIPTION);

    const ldId = "blog-essay-jsonld";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@type": "Organization", name: "StudyHelperTools" },
      publisher: {
        "@type": "Organization",
        name: "StudyHelperTools",
        logo: { "@type": "ImageObject", url: "https://studyhelpertools.com/favicon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    });
    document.head.appendChild(script);
    return () => document.getElementById(ldId)?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <article className="container max-w-3xl py-10 md:py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <header className="mt-8 border-b border-border pb-8">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              Study Hacks
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{DESCRIPTION}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> StudyHelperTools Team</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 8, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</span>
            </div>
          </header>

          <AdPlaceholder className="mt-8" />

          <div className="prose prose-invert mt-10 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              It's 10 PM. Your essay is due at midnight. You haven't written a single word. Sound familiar? Don't panic — writing 1,000 solid words in two hours is absolutely doable, and you don't need to be a genius to pull it off. You just need a system. Here's the one that's saved me (and thousands of students) more times than I can count.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">The 10-Minute Outline</h2>
            <p>
              Don't skip this step. Seriously. The instinct is to start typing immediately, but ten minutes spent outlining will save you an hour of rewriting later. Open a blank doc and jot down: your thesis in one sentence, three main arguments, and one supporting point under each. That's it. No paragraphs, no fancy wording — just bullet points.
            </p>
            <p>
              Think of it as the skeleton. A 1,000-word essay roughly breaks down into a 150-word intro, three 250-word body sections, and a 100-word conclusion. Knowing those targets up front keeps you from rambling or running short.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">Drafting Without Deleting</h2>
            <p>
              Here's the rule that changes everything: <strong className="text-foreground">do not edit while you draft.</strong> The fastest way to kill momentum is to read what you just wrote, hate it, and rewrite the same sentence five times. Resist. Even if your second paragraph sounds awful, leave it. You'll fix it later.
            </p>
            <p>
              Set a timer for 60 minutes and aim for 800 words in that block. That's about 13 words per minute — totally manageable when you're not second-guessing every phrase. If you blank on a word, type [BETTER WORD HERE] in brackets and keep moving. If a stat needs verifying, write [CHECK SOURCE] and continue. Flow first, polish later.
            </p>

            <div className="my-8 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-accent/30 to-transparent p-6 md:p-8 text-center">
              <FileText className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Check your real-time word count with our Free Word Counter
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track words, characters, sentences, and reading time as you write — no signup needed.
              </p>
              <Link
                to="/word-counter"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Free Word Counter <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground">The Final Polish</h2>
            <p>
              You've got a rough draft. Now you have about 30 minutes left — perfect. Read it out loud. Yes, out loud. Your ear catches clunky sentences your eyes will miss every time. Fix the brackets you left behind, tighten any sentence longer than 25 words, and cut filler phrases like "in order to," "due to the fact that," and "it is important to note."
            </p>
            <p>
              Then run a spell-check, glance at your word count, and tweak the intro and conclusion last — those are what graders read most carefully. If you're sitting at 1,050 words, leave it. The 10% margin rule is your friend.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">One Last Tip</h2>
            <p>
              Speed-writing isn't about cutting corners — it's about removing the friction that slows you down. The students who write fast aren't smarter; they just stopped negotiating with themselves about every sentence. Trust the outline, trust the draft, and trust the polish. Two hours is more than enough.
            </p>
            <p>
              Now close this tab and go write. You've got this.
            </p>
          </div>

          <AdPlaceholder className="mt-12" />

          <div className="mt-10 flex justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <Link
              to="/word-counter"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Try Word Counter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogWriteEssayFast;
