import ToolPageLayout from "@/components/ToolPageLayout";

const Privacy = () => (
  <ToolPageLayout
    title="Privacy Policy | StudyHelperTools"
    metaDescription="StudyHelperTools privacy policy: we don't store text from our tools, all processing happens in your browser, and we use Google Analytics and AdSense to keep tools free."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <p className="text-base">
        <strong className="text-foreground">Last updated:</strong> May 2026
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Your Privacy Matters</h2>
      <p>
        At <strong className="text-foreground">StudyHelperTools</strong>, we take your privacy seriously. We want to be clear and upfront about how our site works.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">We Do Not Store Your Text</h2>
      <p>
        We <strong className="text-foreground">DO NOT</strong> store or save any text you paste into our tools (like the Word Counter, Case Converter, or Plagiarism Checker). All processing happens locally in your browser. Once you close the tab, the content is gone — we never see it.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Analytics</h2>
      <p>
        We use <strong className="text-foreground">Google Analytics (G-N30N7KLWD3)</strong> to understand our traffic and improve our services. This helps us know which tools students find most useful and where we should focus our efforts.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Cookies and Advertising</h2>
      <p>
        We also use cookies to serve ads via <strong className="text-foreground">Google AdSense</strong> to keep our tools free for students. These cookies may be used by Google and its partners to serve ads based on your prior visits to our site or other sites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Ads Settings</a>.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Account Data</h2>
      <p>
        If you create an account, we store your email address and any optional profile details (display name, university, major) and semester records you choose to add. This data is private to you and never sold or shared.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Contact Us</h2>
      <p>
        For any privacy-related queries, contact us at <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a>.
      </p>
    </div>
  </ToolPageLayout>
);

export default Privacy;
