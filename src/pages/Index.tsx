import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import HomeFAQ from "@/components/HomeFAQ";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import TrustBadges from "@/components/TrustBadges";
import heroImage from "@/assets/hero-illustration.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Type, FileText, Percent, ShieldCheck, Star, ArrowRight, BarChart3, Layout, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const academicTools = [
  { 
    title: "GPA Calculator", 
    desc: "Enter your grades and credit hours — this tool handles the math, semester by semester, on a standard 4.0 scale.", 
    icon: Calculator, 
    path: "/gpa-calculator",
    related: [
      { name: "CGPA Calculator", path: "/cgpa-calculator" },
      { name: "Grade to GPA", path: "/letter-grade-to-gpa-converter" }
    ]
  },
  { 
    title: "CGPA Calculator", 
    desc: "Calculate your cumulative GPA across multiple semesters. Enter each semester's GPA and credit hours to get your overall standing.", 
    icon: Calculator, 
    path: "/cgpa-calculator",
    related: [
      { name: "GPA Calculator", path: "/gpa-calculator" },
      { name: "GPA to %", path: "/gpa-to-percentage" }
    ]
  },
  { 
    title: "Study Planner", 
    desc: "Generate a personalized weekly study schedule based on your subjects and exam dates. Stay organized and reduce stress.", 
    icon: Calendar, 
    path: "/study-schedule-maker",
    related: [
      { name: "GPA Calculator", path: "/gpa-calculator" }
    ]
  },
  { 
    title: "Grade to GPA", 
    desc: "Convert your letter grades (A, B, C, etc.) to the standard 4.0 GPA scale instantly. Weighted for accuracy.", 
    icon: Calculator, 
    path: "/letter-grade-to-gpa-converter",
    related: [
      { name: "GPA Calculator", path: "/gpa-calculator" },
      { name: "GPA to %", path: "/gpa-to-percentage" }
    ]
  },
  { 
    title: "GPA to %", 
    desc: "Convert your GPA to percentage instantly on the 4.0 scale. See global conversion standards and formulas.", 
    icon: Percent, 
    path: "/gpa-to-percentage",
    related: [
      { name: "CGPA Calculator", path: "/cgpa-calculator" },
      { name: "Grade to GPA", path: "/letter-grade-to-gpa-converter" }
    ]
  },
  { 
    title: "Pomodoro Timer", 
    desc: "Boost your focus with the 25/5 technique. Scientifically proven to help students maintain concentration.", 
    icon: Clock, 
    path: "/pomodoro-timer" 
  },
];

const writingTools = [
  { 
    title: "Outline Generator", 
    desc: "Stop staring at a blank page. Generate a structured essay outline for any topic instantly.", 
    icon: Layout, 
    path: "/essay-outline-generator",
    related: [
      { name: "Word Counter", path: "/word-counter" },
      { name: "Plagiarism Checker", path: "/plagiarism-checker" }
    ]
  },
  { 
    title: "Word Counter", 
    desc: "Paste any text and instantly see word count, character count, sentence count, and estimated reading time.", 
    icon: FileText, 
    path: "/word-counter",
    related: [
      { name: "Outline Generator", path: "/essay-outline-generator" },
      { name: "Case Converter", path: "/case-converter" }
    ]
  },
  { 
    title: "Case Converter", 
    desc: "Switch between UPPERCASE, lowercase, and Title Case in one click. Perfect for fixing formatting.", 
    icon: Type, 
    path: "/case-converter",
    related: [
      { name: "Word Counter", path: "/word-counter" }
    ]
  },
  { 
    title: "Plagiarism Checker", 
    desc: "A quick originality sanity-check before you submit. Paste your essay and run a basic scan.", 
    icon: ShieldCheck, 
    path: "/plagiarism-checker",
    related: [
      { name: "Outline Generator", path: "/essay-outline-generator" },
      { name: "Word Counter", path: "/word-counter" }
    ]
  },
];

const testimonials = [
  { name: "Sarah J.", school: "UCLA", text: "I used to calculate my GPA by hand every semester. This tool does it in seconds — and the multi-semester feature is genuinely a lifesaver before registration deadlines." },
  { name: "Mark T.", school: "NYU", text: "The word counter has become part of my writing routine. I check reading time before every submission — it's one of those small things that makes a real difference." },
  { name: "Emily R.", school: "UT Austin", text: "Finally, a case converter that just works. No pop-ups, no sign-up walls, no ads covering half the screen. This is how online tools should be built." },
];

const universities = ["Harvard", "Stanford", "MIT", "Oxford", "UCLA", "NYU"];

const Index = () => {
  useEffect(() => {
    document.title = "StudyHelperTools — Free GPA Calculator, Word Counter & Academic Tools";
    const meta = document.querySelector('meta[name="description"]');
    const content = "StudyHelperTools offers free, premium-quality academic tools — GPA Calculator, CGPA Calculator, Case Converter, Word Counter, Plagiarism Checker & more. Built by students, for students.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const renderToolGrid = (tools: any[]) => (
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool, i) => (
        <motion.div key={tool.path} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
          <div className="tool-card group flex flex-col h-full rounded-xl border border-border bg-card p-6">
            <Link to={tool.path} className="flex-1">
              <tool.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{tool.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
            </Link>
            
            {tool.related && tool.related.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Often used with:</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {tool.related.map((rel: any) => (
                    <Link 
                      key={rel.path} 
                      to={rel.path} 
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      {rel.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link to={tool.path} className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Open tool <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
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
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Study Smarter,<br />Not Harder.
            </h1>
            <p className="mt-4 max-w-md text-lg text-white/75">
              Free, premium-quality tools built for students who demand speed, accuracy, and simplicity. No sign-ups required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/gpa-calculator">Try GPA Calculator <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                <a href="#tools">View All Tools</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block">
            <img src={heroImage} alt="Student using academic tools for GPA calculation" className="w-full rounded-2xl opacity-90" />
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-border bg-card py-8">
        <div className="container text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Trusted by students from top universities worldwide</p>
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
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Calculate your GPA, CGPA, and percentage conversions — quickly, accurately, and without any fuss.</p>
          {renderToolGrid(academicTools)}
        </div>
      </section>

      {/* Writing Tools */}
      <section className="border-t border-border bg-card/50 py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">Writing Tools</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Count words, fix formatting, and check for originality — everything you need for clean, polished writing.</p>
          {renderToolGrid(writingTools)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">What Students Say</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Real feedback from real students across the country.</p>
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
            No accounts required for tools, no installs, no complicated setup. Just open and go.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Pick Your Tool", desc: "Choose from our Academic Calculators or Writing Tools. Each one is purpose-built for a specific task students encounter regularly." },
              { step: "2", title: "Enter Your Data", desc: "Type in your grades, paste your essay, or enter any text. Everything runs in your browser — nothing is sent to a server or stored anywhere." },
              { step: "3", title: "Get Your Result", desc: "See your GPA, word count, converted text, or percentage in seconds. Copy it, use it, and get back to what actually matters." },
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

      {/* SEO Brand Block */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Why StudyHelperTools?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            StudyHelperTools is an independent academic platform built specifically for university and college students. Whether you're calculating your semester GPA, tracking your cumulative academic performance, converting grades to percentages for graduate school applications, or simply counting words before a submission deadline — our tools are designed to save you time and reduce stress.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Unlike other "free" tools that bombard you with ads, force account creation, or sell your data, StudyHelperTools is committed to being genuinely useful. Every core tool runs locally in your browser for maximum privacy. We're adding new features like semester tracking, career predictions, and AI-powered study insights — all shaped by feedback from students like you.
          </p>
        </div>
      </section>

      <TrustBadges />

      <LatestBlogPosts />

      <HomeFAQ />

      <AdPlaceholder className="container my-8" />

      <Footer />
    </div>
  );
};

export default Index;