import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import heroImage from "@/assets/hero-illustration.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Type, FileText, Percent, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const tools = [
  { title: "GPA Calculator", desc: "Calculate your GPA on a 4.0 scale with multi-semester support.", icon: Calculator, path: "/gpa-calculator" },
  { title: "Case Converter", desc: "Convert text to UPPERCASE, lowercase, or Title Case instantly.", icon: Type, path: "/case-converter" },
  { title: "Word Counter", desc: "Real-time word, character count & estimated reading time.", icon: FileText, path: "/word-counter" },
  { title: "GPA to Percentage", desc: "Convert your GPA to percentage with formula breakdowns.", icon: Percent, path: "/gpa-to-percentage" },
  { title: "Plagiarism Checker", desc: "Check your text for originality. Deep Scan coming soon.", icon: ShieldCheck, path: "/plagiarism-checker" },
];

const testimonials = [
  { name: "Sarah J.", school: "UCLA", text: "StudyHelperTool's GPA calculator saved me so much time during finals. It's clean, fast, and exactly what I needed." },
  { name: "Mark T.", school: "NYU", text: "I use the word counter daily for my essays. The reading time estimate is surprisingly accurate and super helpful." },
  { name: "Emily R.", school: "UT Austin", text: "Finally a case converter that just works. No ads everywhere, no sign-ups. This is how tools should be built." },
];

const universities = ["Harvard", "Stanford", "MIT", "Oxford", "UCLA", "NYU"];

const Index = () => {
  useEffect(() => {
    document.title = "StudyHelperTool — Free Premium Study Tools for Students";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Free premium study tools: GPA Calculator, Case Converter, Word Counter & more. Trusted by students from top universities.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

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

      {/* Tools Grid */}
      <section id="tools" className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">All-in-One Student Toolkit</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Every tool a student needs — fast, free, and meticulously designed.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">What Students Say</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Real feedback from students across the country.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6">
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

      <AdPlaceholder className="container my-8" />

      <Footer />
    </div>
  );
};

export default Index;
