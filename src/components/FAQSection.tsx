import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  pageTitle: string;
}

const FAQSection = ({ faqs, pageTitle }: FAQSectionProps) => {
  useEffect(() => {
    const script = document.querySelector(`script[data-faq="${pageTitle}"]`);
    if (script) return;

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-faq", pageTitle);
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [faqs, pageTitle]);

  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="mt-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
