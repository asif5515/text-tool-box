import { useState } from "react";
import ToolPageLayout from "@/components/ToolPageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "How quickly do you respond?",
    answer:
      "I try to reply within 24–48 hours. If it's exam season, it might take a little longer — you know how it is.",
  },
  {
    question: "Can I suggest a new tool?",
    answer:
      "Absolutely! Some of the best tools on this site started as suggestions from students like you. I'd love to hear your ideas.",
  },
  {
    question: "I found a bug. How do I report it?",
    answer:
      "Just use this form and pick 'Bug Report' as the subject. Screenshots help a ton if you can include a description of what went wrong.",
  },
  {
    question: "Is this site really free?",
    answer:
      "100%. No hidden fees, no premium tier, no 'free trial that expires.' Every tool is free and always will be.",
  },
];

const subjectOptions = [
  "General Question",
  "Tool Suggestion",
  "Bug Report",
  "Feedback",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: subjectOptions[0], message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@studyhelpertools.com?subject=${encodeURIComponent(form.subject + " — from " + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Opening your email client!",
      description: "If it doesn't open, you can email us directly at hello@studyhelpertools.com.",
    });
  };

  return (
    <ToolPageLayout
      title="Contact StudyHelperTool — Feedback, Suggestions & Support"
      metaDescription="Have a question, tool suggestion, or found a bug? Reach out to the StudyHelperTool team — every message is read personally."
      faqs={faqs}
    >
      <div className="max-w-2xl">
        {/* Friendly intro */}
        <div className="rounded-xl border border-border bg-card p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-medium">A note from the creator</p>
              <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                Hi! I'm the creator of StudyHelperTools. I love hearing from students and personally
                read every message. Whether it's a bug, a tool idea, or just a "hey" — I'm all ears.
                Let's make studying easier together!
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. Sarah J."
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@university.edu"
                required
                maxLength={255}
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              required
              maxLength={2000}
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" size="lg" className="gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          This opens your default email app. You can also email us directly at{" "}
          <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">
            hello@studyhelpertools.com
          </a>.
        </p>
      </div>
    </ToolPageLayout>
  );
};

export default Contact;
