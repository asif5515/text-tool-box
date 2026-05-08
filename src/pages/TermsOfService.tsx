import ToolPageLayout from "@/components/ToolPageLayout";

const TermsOfService = () => (
  <ToolPageLayout
    title="Terms of Service | StudyHelperTools"
    metaDescription="StudyHelperTools terms of service — fair, simple terms for using our free academic calculators and writing tools."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <p className="text-base">
        <strong className="text-foreground">Last updated:</strong> May 2026
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Agreement</h2>
      <p>
        By using <strong className="text-foreground">StudyHelperTools</strong>, you agree to use our tools for personal and academic purposes only.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Accuracy Disclaimer</h2>
      <p>
        While we strive for 100% accuracy in our calculators and counters, we are <strong className="text-foreground">not liable</strong> for any academic or financial loss resulting from the use of our site. Always double-check important results — especially when your GPA, grades, or academic standing are on the line.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Prohibited Use</h2>
      <p>
        Users are prohibited from scraping our data, attempting to reverse-engineer the site, or using our tools for malicious purposes. Don't use automated bots to overwhelm our servers, and don't redistribute the site as your own.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Accounts</h2>
      <p>
        Creating an account is optional. If you do, you're responsible for keeping your credentials secure. We're not liable for unauthorized access caused by shared or compromised passwords.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Changes</h2>
      <p>
        We may update these terms from time to time. When we do, we'll update the date at the top of this page.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Questions?</h2>
      <p>
        Reach out anytime at <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a>.
      </p>
    </div>
  </ToolPageLayout>
);

export default TermsOfService;
