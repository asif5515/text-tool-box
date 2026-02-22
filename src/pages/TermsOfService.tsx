import ToolPageLayout from "@/components/ToolPageLayout";

const TermsOfService = () => (
  <ToolPageLayout
    title="Terms of Service"
    metaDescription="StudyHelperTools terms of service — straightforward, fair terms for using our academic tools."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <p className="text-base">
        <strong className="text-foreground">Last updated:</strong> February 2026
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Welcome</h2>
      <p>
        These terms are straightforward because our platform is straightforward. By using StudyHelperTools, you agree to the following. If you don't agree, that's perfectly fine — but please don't use the site.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What You Can Do</h2>
      <ul className="space-y-1">
        <li>Use any tool on this site for personal, academic, or professional purposes.</li>
        <li>Create an account to track your academic progress and save semester records.</li>
        <li>Share the site with classmates, colleagues, or anyone who might find it useful.</li>
        <li>Suggest new tools or report bugs — we genuinely appreciate the feedback.</li>
      </ul>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What You Shouldn't Do</h2>
      <ul className="space-y-1">
        <li>Don't attempt to reverse-engineer, scrape, or exploit the site or its infrastructure.</li>
        <li>Don't use automated bots to overwhelm our servers or abuse the service.</li>
        <li>Don't misrepresent this site as your own or redistribute it without permission.</li>
        <li>Don't use your account to store or transmit content that violates any laws.</li>
      </ul>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Accounts</h2>
      <p>
        Creating an account is optional. If you do create one, you're responsible for keeping your login credentials secure. We're not liable for any unauthorized access to your account resulting from shared or compromised passwords.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Premium Features</h2>
      <p>
        Some features may be offered as premium in the future. If we introduce paid tiers, we'll clearly communicate pricing, terms, and cancellation policies before you commit to anything. Free tools will remain free.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Disclaimer</h2>
      <p>
        All tools are provided "as is." While we work hard to keep everything accurate and reliable, we can't guarantee that every calculation is perfect in every scenario. Always double-check important results — especially when your GPA, grades, or academic standing are on the line.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Changes</h2>
      <p>
        We may update these terms from time to time. When we do, we'll update the date at the top of this page. No fine print, no hidden changes — that's a promise.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Questions?</h2>
      <p>
        If anything here is confusing, just reach out at <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a>. We believe in keeping things clear and honest.
      </p>
    </div>
  </ToolPageLayout>
);

export default TermsOfService;
