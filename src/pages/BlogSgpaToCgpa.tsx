import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Calculator, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";

const TITLE = "How to Convert SGPA to CGPA: A Step-by-Step Calculation Guide";
const META_TITLE = "SGPA to CGPA Conversion: Step-by-Step Guide | StudyHelperTools";
const DESCRIPTION =
  "Learn how to convert SGPA to CGPA with a simple formula and worked example. Understand the math behind your cumulative grade point average in minutes.";
const URL = "https://studyhelpertools.com/blog/how-to-convert-sgpa-to-cgpa";
const PUBLISHED = "2026-05-10";

const BlogSgpaToCgpa = () => {
  useEffect(() => {
    document.title = META_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", DESCRIPTION);

    const ldId = "blog-sgpa-to-cgpa-jsonld";
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
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 4 min read</span>
            </div>
          </header>

          <AdPlaceholder className="mt-8" />

          <div className="prose prose-invert mt-10 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              If you've been staring at your semester results wondering how to roll them all up into one final number for your transcript or scholarship form — relax. Converting <strong className="text-foreground">SGPA (Semester Grade Point Average)</strong> to <strong className="text-foreground">CGPA (Cumulative Grade Point Average)</strong> is honestly one of the easiest pieces of math you'll do all year.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">The Simple Formula</h2>
            <p>
              In its most common form, the conversion looks like this:
            </p>
            <div className="rounded-xl border border-primary/30 bg-accent/60 p-5 text-center">
              <p className="font-display text-lg font-semibold text-foreground">
                CGPA = (Sum of all SGPAs) ÷ (Total number of semesters)
              </p>
            </div>
            <p>
              That's it. You add up the SGPA from every semester you've completed, then divide by how many semesters there are. No weird weighting, no hidden multipliers — just a clean average. (Heads up: a few universities weight semesters by credit hours instead. If yours does, multiply each SGPA by that semester's credits, sum those, and divide by total credits.)
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground">A Worked Example</h2>
            <p>
              Let's say you've finished two semesters and your results look like this:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card">
                  <tr className="text-left text-foreground">
                    <th className="px-4 py-3 font-semibold">Semester</th>
                    <th className="px-4 py-3 font-semibold">SGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Semester 1</td>
                    <td className="px-4 py-3">8.0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Semester 2</td>
                    <td className="px-4 py-3">7.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Plug those into the formula:</p>
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="font-mono text-base text-foreground">
                CGPA = (8.0 + 7.0) ÷ 2 = 15.0 ÷ 2 = <strong className="text-primary">7.5</strong>
              </p>
            </div>
            <p>
              Your CGPA after two semesters is <strong className="text-foreground">7.5</strong>. Add a third semester later? Just include it in the sum and divide by 3. The formula scales for as many semesters as your degree has.
            </p>

            <AdPlaceholder className="my-10" />

            <h2 className="font-display text-2xl font-bold text-foreground">A Few Things to Watch Out For</h2>
            <p>
              Before you trust the number, double-check two things with your university:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Scale:</strong> Most Indian and Asian universities use a 10.0 scale. US schools typically use 4.0. Don't mix them.</li>
              <li><strong className="text-foreground">Weighting:</strong> If your institution weights by credit hours, the simple average above will be slightly off. Check your student handbook.</li>
            </ul>

            <p>
              Other than that, the math is genuinely this simple — even if the acronyms make it sound scarier than it is. Once you have your CGPA, you may also need to translate it to a percentage for scholarships, visa forms, or international applications — our <Link to="/gpa-to-percentage" className="text-primary underline underline-offset-2 hover:text-primary/80">GPA to Percentage Converter</Link> handles that in a single click.
            </p>

            <div className="my-10 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-accent/30 to-transparent p-6 md:p-8 text-center">
              <Calculator className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Ready to calculate?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Skip the manual math — drop in your semester results and get your CGPA instantly.
              </p>
              <Link
                to="/cgpa-calculator"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Use our CGPA Calculator now! <ArrowRight className="h-4 w-4" />
              </Link>
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
              to="/cgpa-calculator"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Try CGPA Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogSgpaToCgpa;
