import ToolPageLayout from "@/components/ToolPageLayout";

const About = () => (
  <ToolPageLayout
    title="About StudyHelperTools"
    metaDescription="StudyHelperTools is a small team of developers and educators building free, high-quality academic utility tools for students worldwide."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <h2 className="font-display text-2xl font-bold text-foreground">Who We Are</h2>
      <p>
        Welcome to <strong className="text-foreground">StudyHelperTools</strong>. We are a small team of developers and educators dedicated to making academic life easier for students globally. Our mission is simple: to provide high-quality, free-to-use utility tools that help you focus on learning rather than formatting.
      </p>
      <p>
        From calculating word counts for UCAS personal statements to tracking GPA, we build tools that are accurate, fast, and accessible to everyone, everywhere.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">Our Mission</h2>
      <p>
        Every student deserves access to fast, reliable, and thoughtfully designed academic tools — without paywalls, forced sign-ups, or cluttered interfaces. Whether you need to calculate your GPA, count words in an essay, convert text formatting, or check originality, we believe these essentials should be free, private, and one click away.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What Sets Us Apart</h2>
      <ul className="space-y-2">
        <li><strong className="text-foreground">Genuinely Free.</strong> No hidden tiers, no expiring trials. Core tools are free and will stay that way.</li>
        <li><strong className="text-foreground">Privacy by Design.</strong> Calculations run entirely in your browser — your essays and grades never touch our servers.</li>
        <li><strong className="text-foreground">Built for Speed.</strong> No bloated frameworks, no loading screens. Tools that load instantly and just work.</li>
        <li><strong className="text-foreground">Student-First Thinking.</strong> Every feature decision starts with one question: "Would this actually help a student at 2 AM before a deadline?"</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">Get In Touch</h2>
      <p>
        Got an idea for a tool you wish existed? We'd love to hear from you. Reach us anytime at <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a> or through our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
      </p>
      <p className="mt-6 font-medium text-foreground">
        Thanks for being here. Now go ace that exam. 🎓
      </p>
    </div>
  </ToolPageLayout>
);

export default About;
