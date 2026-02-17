import ToolPageLayout from "@/components/ToolPageLayout";

const TermsOfService = () => (
  <ToolPageLayout
    title="Terms of Service"
    metaDescription="StudyHelperTool terms of service — simple, fair terms for using our free student tools."
  >
    <div className="prose prose-sm max-w-none text-muted-foreground">
      <p className="text-base">
        <strong className="text-foreground">Last updated:</strong> February 2026
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Welcome</h2>
      <p>
        These terms are simple because our site is simple. By using StudyHelperTool, you agree to the following. If you don't agree, that's okay — but please don't use the site.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What You Can Do</h2>
      <ul className="space-y-1">
        <li>Use any tool on this site for personal, academic, or professional purposes — completely free.</li>
        <li>Share the site with friends, classmates, or anyone who might find it useful.</li>
        <li>Suggest new tools or report bugs — we genuinely appreciate it.</li>
      </ul>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">What You Shouldn't Do</h2>
      <ul className="space-y-1">
        <li>Don't attempt to reverse-engineer, scrape, or misuse the site.</li>
        <li>Don't use automated bots to overwhelm our servers.</li>
        <li>Don't pretend this site is yours or rebrand it without permission.</li>
      </ul>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Disclaimer</h2>
      <p>
        All tools are provided "as is." While we do our best to keep everything accurate, we can't guarantee that every calculation is perfect. Always double-check important results — especially when your GPA or grades are on the line.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Changes</h2>
      <p>
        We may update these terms from time to time. If we do, we'll update the date at the top. Nothing sneaky — we promise.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Questions?</h2>
      <p>
        If anything here is confusing, just reach out. We're students too — we believe in keeping things straightforward.
      </p>
    </div>
  </ToolPageLayout>
);

export default TermsOfService;
