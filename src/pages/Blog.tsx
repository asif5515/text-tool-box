import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";

const posts = [
  {
    slug: "/blog/gpa-to-percentage-guide",
    title: "GPA to Percentage: The Complete Conversion Guide",
    excerpt:
      "Everything students need to know about converting GPA into percentage — formulas, scales, and country-specific tips for grad school applications.",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "Academic Guides",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — Study Tips, GPA Guides & Academic Resources | StudyHelperTools";
    const desc =
      "Read in-depth guides on GPA conversion, study strategies, and academic productivity from StudyHelperTools — written for students, by students.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 text-primary" /> StudyHelperTools Blog
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold text-foreground md:text-5xl">
              Guides, Tips & Academic Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Practical, no-fluff guides on GPA, study habits, and academic productivity — written to actually help students succeed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                className="tool-card group block rounded-xl border border-border bg-card p-6"
              >
                <div className="text-xs font-medium uppercase tracking-widest text-primary">
                  {p.category}
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date} · {p.readTime}</span>
                  <span className="inline-flex items-center text-primary font-medium">
                    Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-border bg-card/50 p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground">More articles coming soon</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              We're publishing new guides every month — covering CGPA, study planning, AI tools for students, and more.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
