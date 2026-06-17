import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, FileText, Sparkles, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";

const TITLE = "GPA vs. CGPA: The Ultimate Guide for International Students (2026)";
const META_TITLE = "GPA vs CGPA Explained | International Student Guide";
const DESCRIPTION =
  "Confused between GPA and CGPA? Learn the key differences, how to calculate them, and why they matter for your university applications abroad.";
const URL = "https://studyhelpertools.com/blog/difference-between-gpa-and-cgpa-guide";
const PUBLISHED = "2026-05-10";

const BlogGpaVsCgpa = () => {
  useEffect(() => {
    document.title = META_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", DESCRIPTION);

    const ldId = "blog-gpa-vs-cgpa-jsonld";
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
              Academic Guides
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{DESCRIPTION}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> StudyHelperTools Team</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 10, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</span>
            </div>
          </header>

          <AdPlaceholder className="mt-8" />

          <div className="prose prose-invert mt-10 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              If you've ever stared at a university application form wondering whether to type your GPA or your CGPA — and panicked because you weren't 100% sure which was which — you're not alone. These two acronyms get thrown around like they're interchangeable, but they actually mean different things. And when you're applying abroad in 2026, getting them right can make or break your application.
            </p>
            <p>
              Let's clear it up once and for all, in plain English.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">What is GPA?</h2>
            <p>
              GPA stands for <strong className="text-foreground">Grade Point Average</strong>. It's the average of your grades for a <em>single term</em> — usually one semester or one academic quarter. Each course you take is assigned a grade point (like 4.0 for an A, 3.0 for a B), and your GPA is the weighted average across all your courses for that term.
            </p>
            <p>
              Think of GPA as a snapshot. It tells you how you did <em>this</em> semester. Crushed your finals? Your GPA goes up. Bombed organic chemistry? It drops. It's short-term, sensitive, and resets each term.
            </p>

            <h3 className="font-display text-xl font-semibold text-foreground">Quick example</h3>
            <p>
              If you took four classes this semester and earned grade points of 4.0, 3.7, 3.3, and 3.0, your GPA for the term is roughly <strong className="text-foreground">3.5</strong>.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">What is CGPA?</h2>
            <p>
              CGPA stands for <strong className="text-foreground">Cumulative Grade Point Average</strong>. As the name hints, it's the cumulative average of <em>every</em> grade you've earned across <em>every</em> term of your entire course or degree program.
            </p>
            <p>
              CGPA is the long game. It's the number that follows you onto your final transcript and the one most graduate schools and employers actually care about. A great semester can nudge your CGPA up — but only slightly, because it's averaged across years of work.
            </p>

            <AdPlaceholder className="my-10" />

            <h2 className="font-display text-2xl font-bold text-foreground">Key Differences: GPA vs CGPA</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card">
                  <tr className="text-left text-foreground">
                    <th className="px-4 py-3 font-semibold">Aspect</th>
                    <th className="px-4 py-3 font-semibold">GPA</th>
                    <th className="px-4 py-3 font-semibold">CGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Duration</td>
                    <td className="px-4 py-3">Single term or semester</td>
                    <td className="px-4 py-3">Entire course / full degree</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Calculation</td>
                    <td className="px-4 py-3">Average of grade points for that term</td>
                    <td className="px-4 py-3">Average of all GPAs across all terms</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Impact</td>
                    <td className="px-4 py-3">Short-term performance indicator</td>
                    <td className="px-4 py-3">Long-term academic standing on transcripts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground">Global Standards: Who Uses What?</h2>
            <p>
              Here's where it gets interesting for international students. Different regions don't just use these terms differently — they sometimes prioritize different numbers entirely.
            </p>
            <h3 className="font-display text-xl font-semibold text-foreground">United States</h3>
            <p>
              US universities almost always ask for your <strong className="text-foreground">GPA</strong> on a 4.0 scale. They typically want your cumulative GPA (which is essentially CGPA, just called GPA), but the term "CGPA" is rarely used in American admissions paperwork. If a US application asks for "GPA," they usually mean your overall average.
            </p>
            <h3 className="font-display text-xl font-semibold text-foreground">Europe</h3>
            <p>
              European systems vary wildly. The UK uses degree classifications (First, 2:1, 2:2), while many continental European universities use percentage-based scales or the ECTS grading system. When CGPA <em>is</em> requested, it's usually for postgraduate applications and converted from your home scale.
            </p>
            <h3 className="font-display text-xl font-semibold text-foreground">Asia</h3>
            <p>
              India, Pakistan, Bangladesh, Malaysia, and several Middle Eastern countries use <strong className="text-foreground">CGPA</strong> heavily — often on a 10.0 or 4.0 scale. If you're applying from these regions to a US or UK school, you'll likely need to convert your CGPA into a percentage or the local GPA equivalent.
            </p>

            <div className="my-10 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-accent/30 to-transparent p-6 md:p-8 text-center">
              <FileText className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Need to check your essay length? Use our Word Counter.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Perfect for personal statements, SOPs, and admissions essays — track words, characters, and reading time in real time.
              </p>
              <Link
                to="/word-counter"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Free Word Counter <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground">Which One Matters More?</h2>
            <p>
              Honestly? Both. Your <strong className="text-foreground">CGPA</strong> is what universities and employers look at first — it's the headline number on your transcript. But a strong upward GPA trend across recent semesters can offset a rocky start, especially if you can show growth in your statement of purpose.
            </p>
            <p>
              The takeaway: don't obsess over one bad semester, but don't slack off either. Every term feeds into the bigger picture. And if your target university asks for a percentage instead of a GPA, our <Link to="/gpa-to-percentage" className="text-primary underline underline-offset-2 hover:text-primary/80">GPA to Percentage Converter</Link> gives you the exact number using the standard 4.0 scale formula.
            </p>

            <div className="my-8 rounded-xl border border-dashed border-primary/40 bg-card p-6 text-center">
              <Sparkles className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 font-display text-lg font-semibold text-foreground">
                Coming Soon: Stay tuned for our automated GPA to CGPA Converter tool!
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We're building a free converter that handles 4.0, 5.0, and 10.0 scales — no math required.
              </p>
            </div>
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
              to="/gpa-calculator"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Try GPA Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogGpaVsCgpa;
