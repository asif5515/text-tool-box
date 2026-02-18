import ToolPageLayout from "@/components/ToolPageLayout";

const Privacy = () => (
  <ToolPageLayout
      title="Privacy Policy — StudyHelperTool"
      metaDescription="Read StudyHelperTool's privacy policy. We collect zero personal data — all tools run locally in your browser. No cookies, no tracking."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <p className="text-base">
        <strong className="text-foreground">Last updated:</strong> February 2026
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">The Short Version</h2>
      <p>
        We don't collect your data. Period. Every tool on StudyHelperTool runs entirely in your browser. Nothing you type, calculate, or convert ever leaves your device.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What We Don't Collect</h2>
      <ul className="space-y-1">
        <li>No personal information (name, email, phone number)</li>
        <li>No text or content you enter into any tool</li>
        <li>No GPA scores, grades, or academic records</li>
        <li>No cookies for tracking purposes</li>
        <li>No analytics that identify individual users</li>
      </ul>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">How the Tools Work</h2>
      <p>
        All calculations — GPA, word counts, case conversions, and everything else — happen locally using JavaScript in your web browser. Your data is processed on your device and is never transmitted to any server.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Third-Party Services</h2>
      <p>
        In the future, we may display ads through Google AdSense or similar networks. These services may use their own cookies. We will update this policy if and when that happens, and any such cookies will be governed by the respective provider's privacy policy.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Changes to This Policy</h2>
      <p>
        If we ever change how we handle data, we'll update this page. Since we currently collect nothing, there's not much to change — but transparency matters.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Questions?</h2>
      <p>
        If you have any questions about this policy, feel free to reach out. We're students too — we get it.
      </p>
    </div>
  </ToolPageLayout>
);

export default Privacy;
