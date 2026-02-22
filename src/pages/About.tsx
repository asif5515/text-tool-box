import ToolPageLayout from "@/components/ToolPageLayout";

const About = () => (
  <ToolPageLayout
    title="About StudyHelperTools"
    metaDescription="StudyHelperTools is a free suite of academic productivity tools designed for students. Our mission is to make studying faster, smarter, and accessible to everyone."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
      <p>
        StudyHelperTools was built with a simple philosophy: every student deserves access to fast, reliable, and thoughtfully designed academic tools — without having to deal with paywalls, forced sign-ups, or cluttered interfaces.
      </p>
      <p>
        Whether you need to calculate your GPA, count the words in an essay, convert text formatting, or run a quick originality check — we believe these essentials should be free, private, and available to anyone with a browser. That's the standard we hold ourselves to, and it's the reason thousands of students rely on us every week.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">The Story Behind It</h2>
      <p>
        It started during sophomore year. Picture this: 2 AM in a dorm room, buried under assignments, trying to figure out whether a scholarship was still within reach. Three "free" GPA calculators later — one drowning in pop-ups, another demanding an account, a third completely broken on mobile — the frustration became motivation.
      </p>
      <p>
        What began as a single GPA calculator shared between a handful of friends has grown into a complete academic toolkit used by students from universities across the country. Every feature on this site was shaped by real student feedback, real academic needs, and a genuine desire to save people time.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What Sets Us Apart</h2>
      <ul className="space-y-2">
        <li><strong className="text-foreground">Genuinely Free.</strong> No hidden tiers, no "free trials" that vanish after a week. The core tools are free and will stay that way.</li>
        <li><strong className="text-foreground">Privacy by Design.</strong> Every calculation runs entirely in your browser. Your grades, your essays, your data — none of it ever touches a server.</li>
        <li><strong className="text-foreground">Built for Speed.</strong> No bloated frameworks, no unnecessary loading screens. Tools that load instantly and do exactly what they promise.</li>
        <li><strong className="text-foreground">Student-First Thinking.</strong> Every feature decision starts with one question: "Would this actually help a student at 2 AM before a deadline?"</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What's Coming Next</h2>
      <p>
        We're continuously adding new tools based on what students actually ask for. Citation formatters, semester tracking dashboards, study planners, and AI-powered career predictions are all on the roadmap.
      </p>
      <p>
        Got an idea for a tool you wish existed? We'd genuinely love to hear about it on our <a href="/contact" className="text-primary hover:underline">Contact page</a>. This platform grows because students like you use it, share it, and tell us what's missing.
      </p>
      <p className="mt-6 font-medium text-foreground">
        Thanks for being here. Now go ace that exam. 🎓
      </p>
    </div>
  </ToolPageLayout>
);

export default About;
