import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdPlaceholder from "./AdPlaceholder";
import FAQSection from "./FAQSection";

interface ToolPageLayoutProps {
  title: string;
  metaDescription: string;
  children: ReactNode;
  howToUse: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

const ToolPageLayout = ({ title, metaDescription, children, howToUse, benefits, faqs }: ToolPageLayoutProps) => {
  useEffect(() => {
    document.title = `${title} | StudyHelperTool`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescription);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = metaDescription;
      document.head.appendChild(m);
    }
  }, [title, metaDescription]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">{metaDescription}</p>

          <AdPlaceholder className="mt-6" />

          <div className="mt-8">{children}</div>

          <AdPlaceholder className="mt-8" />

          <section className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">How to Use</h2>
              <ol className="mt-4 space-y-2 list-decimal list-inside text-muted-foreground">
                {howToUse.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Benefits</h2>
              <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                {benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </section>

          <FAQSection faqs={faqs} pageTitle={title} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolPageLayout;
