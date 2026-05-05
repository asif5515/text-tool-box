import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, FileText, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import FAQSection from "@/components/FAQSection";
import { Card } from "@/components/ui/card";

const TITLE = "GPA to Percentage: The Complete Student Guide (2026)";
const DESCRIPTION =
  "Learn how to convert your GPA to a percentage accurately. Step-by-step formulas, real examples, common mistakes, and a free instant converter — built for students.";
const URL = "https://studyhelpertools.com/blog/gpa-to-percentage-guide";
const PUBLISHED = "2026-02-22";

const faqs = [
  {
    question: "What is the standard formula to convert GPA to percentage?",
    answer:
      "For the US 4.0 scale, the most widely accepted formula is (GPA ÷ 4.0) × 100. So a 3.6 GPA equals 90%. It's a clean linear conversion and the one most admissions offices and employers default to.",
  },
  {
    question: "Does this conversion work for Indian or European universities?",
    answer:
      "Not always. Indian universities often use a 10-point scale where percentage = GPA × 9.5 (the WES formula). European ECTS grades and UK classifications don't map cleanly at all — you usually need a credential evaluator.",
  },
  {
    question: "Why do different schools give different percentages for the same GPA?",
    answer:
      "Because grading scales aren't standardized. One school's A might start at 93%, another at 90%. When you convert back, that small shift changes the result. Always check your transcript's grading key first.",
  },
  {
    question: "Is a 3.5 GPA considered good?",
    answer:
      "A 3.5 GPA (roughly 87.5%) is solidly above average and competitive for most graduate programs and jobs. For top-tier programs like Ivy League schools or competitive med/law programs, you'd typically want 3.7+.",
  },
];

const relatedTools = [
  { name: "GPA Calculator", url: "/gpa-calculator", icon: Calculator, desc: "Calculate semester GPA in seconds" },
  { name: "CGPA Calculator", url: "/cgpa-calculator", icon: Calculator, desc: "Track cumulative GPA across terms" },
  { name: "GPA to Percentage", url: "/gpa-to-percentage", icon: ArrowRight, desc: "Instant converter tool" },
  { name: "Word Counter", url: "/word-counter", icon: FileText, desc: "Count words for essays" },
  { name: "Plagiarism Checker", url: "/plagiarism-checker", icon: BookOpen, desc: "Check originality" },
];

const BlogGPAToPercentageGuide = () => {
  useEffect(() => {
    document.title = `${TITLE} | StudyHelperTools`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", DESCRIPTION);

    const ldId = "blog-jsonld";
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
        <article className="container py-10 md:py-14">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">GPA to Percentage Guide</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            {/* Main content */}
            <div className="min-w-0">
              <header className="border-b border-border pb-8">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  Academic Guides
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  {TITLE}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">{DESCRIPTION}</p>
                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> StudyHelperTools Team</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Feb 22, 2026</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</span>
                </div>
              </header>

              <AdPlaceholder className="mt-8" />

              <div className="prose prose-invert mt-10 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  If you've ever stared at your transcript wondering what your <strong className="text-foreground">3.7 GPA actually means in percentage terms</strong>, you're not alone. Whether you're applying to grad school abroad, filling out a job application that asks for percentages, or just curious where you stand — converting between GPA and percentage trips up a lot of students.
                </p>

                <h2 className="font-display text-2xl font-bold text-foreground">The Quick Answer</h2>
                <p>
                  For the standard US 4.0 GPA scale, the formula is simple:
                </p>
                <div className="rounded-xl border border-primary/30 bg-accent/40 p-6 text-center">
                  <p className="font-display text-xl font-semibold text-foreground">
                    Percentage = (GPA ÷ 4.0) × 100
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Example: 3.5 GPA → 87.5%</p>
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground">Why This Conversion Matters</h2>
                <p>
                  GPA is the standard in the US, but most of the world runs on percentages. When you apply for an exchange program in Europe, a job at a multinational, or a scholarship that asks for "minimum 80%," you need to translate. A bad conversion can cost you opportunities — over-report and you look dishonest, under-report and you might miss the cutoff.
                </p>

                <h2 className="font-display text-2xl font-bold text-foreground">A Conversion Reference Table</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary text-foreground">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">GPA (4.0 scale)</th>
                        <th className="px-4 py-3 text-left font-semibold">Percentage</th>
                        <th className="px-4 py-3 text-left font-semibold">Letter Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        ["4.0", "100%", "A+"],
                        ["3.7", "92.5%", "A-"],
                        ["3.5", "87.5%", "B+"],
                        ["3.0", "75%", "B"],
                        ["2.5", "62.5%", "C"],
                        ["2.0", "50%", "D"],
                      ].map(([g, p, l]) => (
                        <tr key={g}>
                          <td className="px-4 py-3 text-foreground">{g}</td>
                          <td className="px-4 py-3">{p}</td>
                          <td className="px-4 py-3">{l}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground">Common Mistakes to Avoid</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li><strong className="text-foreground">Mixing scales:</strong> A 3.5 on a 5.0 scale is not the same as 3.5 on a 4.0 scale. Always confirm what scale your transcript uses.</li>
                  <li><strong className="text-foreground">Ignoring weighted GPA:</strong> AP and honors classes can push your GPA above 4.0. Most converters assume an unweighted scale.</li>
                  <li><strong className="text-foreground">Rounding too aggressively:</strong> Rounding 87.4% to 88% on an application can technically be misrepresentation.</li>
                </ul>

                <h2 className="font-display text-2xl font-bold text-foreground">When to Use a Different Formula</h2>
                <p>
                  Indian universities under WES (World Education Services) typically use <strong className="text-foreground">Percentage = GPA × 9.5</strong> for 10-point scales. UK first-class honors usually maps to 70%+, not 90%+. If you're applying internationally, check whether the institution accepts a self-converted percentage or requires a formal credential evaluation.
                </p>

                <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">Try It Now — Free Converter</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Skip the manual math. Our converter handles the standard 4.0 scale instantly and shows the formula breakdown.
                  </p>
                  <Link
                    to="/gpa-to-percentage"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Open GPA to Percentage Converter <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground">Final Thoughts</h2>
                <p>
                  GPA conversion isn't glamorous, but getting it right matters when stakes are high. Bookmark this page, use our free tools, and when in doubt — ask the school or employer directly which formula they expect. A two-minute email can save a lot of stress.
                </p>
              </div>

              <AdPlaceholder className="mt-12" />

              <div className="mt-12">
                <FAQSection faqs={faqs} pageTitle={TITLE} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card className="p-5">
                <h3 className="font-display text-base font-semibold text-foreground">Free Student Tools</h3>
                <p className="mt-1 text-xs text-muted-foreground">Use our calculators while you read.</p>
                <ul className="mt-4 space-y-3">
                  {relatedTools.map((t) => (
                    <li key={t.url}>
                      <Link to={t.url} className="group flex items-start gap-3 rounded-md p-2 -m-2 hover:bg-accent transition-colors">
                        <span className="mt-0.5 rounded-md bg-accent p-1.5 text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <t.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                          <span className="block text-xs text-muted-foreground">{t.desc}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-accent/40 to-transparent">
                <h3 className="font-display text-base font-semibold text-foreground">On This Page</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>The Quick Answer</li>
                  <li>Why It Matters</li>
                  <li>Conversion Reference Table</li>
                  <li>Common Mistakes</li>
                  <li>International Formulas</li>
                  <li>FAQ</li>
                </ul>
              </Card>

              <AdPlaceholder />
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogGPAToPercentageGuide;
