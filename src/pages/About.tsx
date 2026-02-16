import ToolPageLayout from "@/components/ToolPageLayout";

const About = () => (
  <ToolPageLayout
    title="About StudyHelperTool"
    metaDescription="Learn the story behind StudyHelperTool — built by a student, for students who needed better, faster, free academic tools."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <h2 className="font-display text-2xl font-bold text-foreground">Why I Built This</h2>
      <p>
        It started during my sophomore year. I was sitting in my dorm at 2 AM, buried under a pile of assignments, trying to figure out if my GPA was high enough to keep my scholarship. I opened three different "free" GPA calculators online — one was covered in pop-ups, another wanted me to create an account just to add a second semester, and the third just… didn't work on my phone.
      </p>
      <p>
        That night, I thought: <em>why is it so hard to find a simple tool that just does the thing?</em>
      </p>
      <p>
        So I started building. First it was just a GPA calculator for myself and a few friends. Then someone asked for a word counter that showed reading time (because our professor had a strict "5-minute presentation" rule and nobody wanted to time themselves). Then came the case converter, because reformatting titles in APA style by hand is nobody's idea of fun.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What This Site Is About</h2>
      <p>
        StudyHelperTool is a collection of small, focused tools that do exactly what they say — no sign-ups, no paywalls, no tracking. Every calculation runs right in your browser. Your data never leaves your screen.
      </p>
      <p>
        I'm not a big company. I'm a student who got tired of clunky websites and decided to make something better. The goal is simple: save you five minutes so you can spend them on something that actually matters — whether that's studying, sleeping, or finally watching that show everyone keeps talking about.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold text-foreground">What's Next</h2>
      <p>
        I keep adding tools based on what students actually ask for. If there's something you wish existed — a citation formatter, a flashcard maker, whatever — I'd genuinely love to hear about it. This site grows because people like you use it and share it.
      </p>
      <p>
        Thanks for stopping by. Now go ace that exam.
      </p>
    </div>
  </ToolPageLayout>
);

export default About;
