import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import heroImage from "@/assets/hero-illustration.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Type, FileText, Percent, ShieldCheck, Star, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const academicTools = [
  { title: "GPA Calculator", desc: "Plug in your grades and credit hours, and this tool handles the math for you — semester by semester, on a standard 4.0 scale.", icon: Calculator, path: "/gpa-calculator" },
  { title: "CGPA Calculator", desc: "Already know your semester GPAs? Enter them here to see your cumulative GPA across your entire academic career.", icon: BarChart3, path: "/cgpa-calculator" },
  { title: "GPA to Percentage", desc: "Need your GPA as a percentage? This converter does it instantly using the standard formula, with a clear breakdown.", icon: Percent, path: "/gpa-to-percentage" },
];

const writingTools = [
  { title: "Word Counter", desc: "Paste any text and instantly see word count, character count, sentence count, and an estimated reading time.", icon: FileText, path: "/word-counter" },
  { title: "Case Converter", desc: "Quickly switch between UPPERCASE, lowercase, and Title Case — great for fixing formatting mistakes without retyping.", icon: Type, path: "/case-converter" },
  { title: "Plagiarism Checker", desc: "Run a quick originality check on your essay before you submit. Deep Scan with source matching is on the way.", icon: ShieldCheck, path: "/plagiarism-checker" },
];

const testimonials = [
  { name: "Sarah J.", school: "UCLA", text: "I used to calculate my GPA by hand every semester. This tool does it in seconds and the multi-semester feature is a lifesaver." },
  { name: "Mark T.", school: "NYU", text: "The word counter is part of my writing routine now. I check reading time before every submission — it's surprisingly helpful." },
  { name: "Emily R.", school: "UT Austin", text: "Finally a case converter that just works. No pop-ups, no sign-up walls. This is exactly how online tools should be." },
];

const universities = ["Harvard", "Stanford", "MIT", "Oxford", "UCLA", "NYU"];

const Index = () => {
  useEffect(() => {
    document.title = "StudyHelperTools — Free GPA Calculator, Word Counter & Academic Tools";
    const meta = document.querySelector('meta[name="description"]');
    const content = "StudyHelperTools offers free, premium-quality academic tools — GPA Calculator, CGPA Calculator, Case Converter, Word Counter, Plagiarism Checker & more. Trusted by thousands of students.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const renderToolGrid = (tools: typeof academicTools) => (
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool, i) => (
        <motion.div key={tool.path} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
          <Link to={tool.path} className="tool-card group block rounded-xl border border-border bg-card p-6">
            <tool.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{tool.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{tool.desc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Open tool <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-section relative overflow-hidden py-20 md:py-32">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Study Smarter,<br />Not Harder.
            </h1>
            <p className="mt-4 max-w-md text-lg text-primary-foreground/70">
              Free, premium-quality tools built for students who demand speed, accuracy, and simplicity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/gpa-calculator">Try GPA Calculator <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#tools">View All Tools</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block">
            <img src={heroImage} alt="Study tools illustration" className="w-full rounded-2xl opacity-90" />
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-border bg-card py-8">
        <div className="container text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Tools built with standards trusted by students from</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {universities.map((u) => (
              <span key={u} className="grayscale-logo font-display text-lg font-bold text-foreground md:text-xl">{u}</span>
            ))}
          </div>
        </div>
      </section>

      <AdPlaceholder className="container mt-8" />

      {/* Academic Calculators */}
      <section id="tools" className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">Academic Calculators</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Calculate your GPA, CGPA, and percentage conversions — quickly and accurately.</p>
          {renderToolGrid(academicTools)}
        </div>
      </section>

      {/* Writing Tools */}
      <section className="border-t border-border bg-card/50 py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">Writing Tools</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Count words, fix formatting, and check for originality — all in one place.</p>
          {renderToolGrid(writingTools)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">What Students Say</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Real feedback from students across the country.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-4 text-sm font-medium text-foreground">{t.name} <span className="text-muted-foreground font-normal">from {t.school}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-card/50 py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            StudyHelperTools keeps things simple — no accounts required, no installs, no fuss.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Pick Your Tool", desc: "Choose from our Academic Calculators or Writing Tools. Each one is purpose-built for a specific task you'll actually run into as a student." },
              { step: "2", title: "Enter Your Data", desc: "Type in your grades, paste your essay, or enter any text. Everything runs in your browser — nothing is sent to a server or stored anywhere." },
              { step: "3", title: "Get Your Result", desc: "See your GPA, word count, converted text, or percentage in seconds. Copy it, use it, and get back to what matters." },
            ].map((item) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AdPlaceholder className="container my-8" />

      <Footer />
    </div>
  );
};

export default Index;
