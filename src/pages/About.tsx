import ToolPageLayout from "@/components/ToolPageLayout";

const About = () => (
  <ToolPageLayout
    title="About StudyHelperTool — Our Mission"
    metaDescription="StudyHelperTool is a free suite of academic productivity tools built for students. Learn about our mission to make studying faster, smarter, and accessible to everyone."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
      <p>
        StudyHelperTool exists for one reason: to give every student access to fast, reliable, and beautifully designed academic tools — without paywalls, sign-ups, or distractions.
      </p>
      <p>
        We believe that essential study utilities — calculating your GPA, counting words for an essay, converting text cases, or checking for plagiarism — should be free, private, and available to anyone with a browser. That's the standard we hold ourselves to.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">How It Started</h2>
      <p>
        It started during sophomore year. A student sat in a dorm at 2 AM, buried under assignments, trying to figure out if their GPA was high enough to keep a scholarship. Three "free" GPA calculators later — one full of pop-ups, one demanding an account, one broken on mobile — the idea for StudyHelperTool was born.
      </p>
      <p>
        What began as a single GPA calculator for a handful of friends has grown into a complete toolkit used by thousands of students across the country.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What Makes Us Different</h2>
      <ul className="space-y-1">
        <li><strong className="text-foreground">100% Free, Forever.</strong> No hidden fees, no premium tiers, no "free trials" that expire.</li>
        <li><strong className="text-foreground">Privacy First.</strong> Every tool runs entirely in your browser. Your data never leaves your device.</li>
        <li><strong className="text-foreground">Built for Speed.</strong> No bloat, no unnecessary features — just tools that do exactly what they say.</li>
        <li><strong className="text-foreground">Student-Centered Design.</strong> Every feature is shaped by real student feedback and real academic needs.</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What's Next</h2>
      <p>
        We're constantly adding new tools based on what students actually ask for. Citation formatters, flashcard generators, study planners — if it helps you study smarter, it's on our radar.
      </p>
      <p>
        If you have an idea for a tool you wish existed, we'd love to hear about it on our <a href="/contact" className="text-primary hover:underline">Contact page</a>. This site grows because students like you use it and share it.
      </p>
      <p className="mt-6 font-medium text-foreground">
        Thanks for being here. Now go ace that exam. 🎓
      </p>
    </div>
  </ToolPageLayout>
);

export default About;
