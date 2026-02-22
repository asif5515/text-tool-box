import ToolPageLayout from "@/components/ToolPageLayout";

const Privacy = () => (
  <ToolPageLayout
    title="Privacy Policy"
    metaDescription="Read StudyHelperTools' privacy policy. We prioritize your privacy — all core tools run locally in your browser with minimal data collection."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <p className="text-base">
        <strong className="text-foreground">Last updated:</strong> February 2026
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">The Short Version</h2>
      <p>
        Your privacy matters to us — genuinely. The core tools on StudyHelperTools (GPA calculators, word counter, case converter) run entirely in your browser. Nothing you type, calculate, or convert in those tools ever leaves your device.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What We Collect</h2>
      <p>If you create an account, we store the following to provide dashboard features:</p>
      <ul className="space-y-1">
        <li>Your email address (for authentication)</li>
        <li>Display name, university, and major (if you choose to provide them)</li>
        <li>Semester GPA records you manually add to your dashboard</li>
      </ul>
      <p>All account data is stored securely and is only accessible to you. We do not sell, share, or monetize your personal information.</p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What We Don't Collect</h2>
      <ul className="space-y-1">
        <li>No text or content entered into browser-based tools (GPA calculator, word counter, etc.)</li>
        <li>No cookies for tracking individual behavior</li>
        <li>No fingerprinting or cross-site tracking</li>
      </ul>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Analytics</h2>
      <p>
        We use Google Analytics to understand how visitors find and use our site. This helps us improve the tools and prioritize what to build next. Google Analytics may use cookies — you can learn more about their practices in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Privacy Policy</a>.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Third-Party Services</h2>
      <p>
        We may display advertisements through Google AdSense or similar networks. These services may use their own cookies to serve relevant ads. Any such cookies are governed by the respective provider's privacy policy, not ours.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Data Deletion</h2>
      <p>
        If you have an account and want your data deleted, contact us at <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a> and we'll handle it promptly.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Changes to This Policy</h2>
      <p>
        If we make meaningful changes to how we handle data, we'll update this page and the date above. We believe in transparency — no fine print, no surprises.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Questions?</h2>
      <p>
        If anything here is unclear, reach out to us at <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a>. We're happy to clarify.
      </p>
    </div>
  </ToolPageLayout>
);

export default Privacy;
