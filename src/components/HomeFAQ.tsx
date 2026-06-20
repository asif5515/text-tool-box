"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Are these tools really free?",
    answer: "Yes, completely free. No hidden charges or surprise paywalls."
  },
  {
    question: "Do you save my data?",
    answer: "No. Everything runs locally in your browser. Your essays, grades, and personal data never touch our servers."
  },
  {
    question: "Which GPA scale do you support?",
    answer: "We support the standard 4.0 GPA scale, which is the universal standard for most universities and colleges."
  },
  {
    question: "Can I use for grad school?",
    answer: "Yes, our calculators match official university formulas used by admissions offices for graduate school applications."
  },
  {
    question: "Do I need to sign up?",
    answer: "No sign-up required. You can use all our tools instantly without creating an account."
  },
  {
    question: "How accurate are calculations?",
    answer: "100% accurate. We use official academic formulas to ensure your GPA and word counts are spot on."
  },
  {
    question: "Works on mobile?",
    answer: "Yes, StudyHelperTools is fully responsive and works perfectly on all smartphones and tablets."
  },
  {
    question: "Can international students use?",
    answer: "Yes, international students can use our tools, including the Grade Converter for custom scales."
  }
];

const HomeFAQ = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-border bg-card/50 px-6 py-4 transition-all hover:border-primary/30">
              <summary className="flex cursor-pointer items-center justify-between font-display font-semibold text-foreground list-none">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-primary" />
              </summary>
              <div className="mt-4 text-sm text-muted-foreground leading-relaxed animate-fade-in border-t border-border/50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;