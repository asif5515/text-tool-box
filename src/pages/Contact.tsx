import { useState } from "react";
import ToolPageLayout from "@/components/ToolPageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const faqs = [
  { question: "How quickly do you respond?", answer: "I try to reply within 24–48 hours. If it's exam season, it might take a little longer — you know how it is." },
  { question: "Can I suggest a new tool?", answer: "Absolutely! Some of the best tools on this site started as suggestions from students like you. I'd love to hear your ideas." },
  { question: "I found a bug. How do I report it?", answer: "Just use this form and pick 'Bug Report' as the subject. Screenshots help a ton if you can include a description of what went wrong." },
  { question: "Is this site really free?", answer: "100%. No hidden fees, no premium tier, no 'free trial that expires.' Every tool is free and always will be." },
];

const subjectOptions = ["General Question", "Tool Suggestion", "Bug Report", "Feedback", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: subjectOptions[0], message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: form,
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", subject: subjectOptions[0], message: "" });
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <ToolPageLayout
      title="Contact StudyHelperTools — Feedback, Suggestions & Support"
      metaDescription="Have a question, tool suggestion, or found a bug? Reach out to the StudyHelperTools team — every message is read personally."
      faqs={faqs}
    >
      <div className="max-w-2xl">
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
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" placeholder="e.g. Sarah J." required maxLength={100} value={form.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="you@university.edu" required maxLength={255} value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              {subjectOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="What's on your mind?" required maxLength={2000} rows={5} value={form.message} onChange={handleChange} />
          </div>

          <Button type="submit" size="lg" className="gap-2" disabled={sending}>
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          Your message is sent directly to{" "}
          <a href="mailto:hello@studyhelpertools.com" className="text-primary hover:underline">hello@studyhelpertools.com</a>.
        </p>
      </div>
    </ToolPageLayout>
  );
};

export default Contact;
