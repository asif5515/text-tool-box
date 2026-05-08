import { useState } from "react";
import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const subjectOptions = ["General question", "Tool feedback", "Partnership", "Support"];

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjectOptions[0],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const { error } = await supabase.functions.invoke("send-contact", { body: form });

    if (error) {
      toast({ title: "Message not sent", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Message sent", description: "Thanks — we'll get back to you shortly." });
      setForm({ name: "", email: "", subject: subjectOptions[0], message: "" });
    }

    setSending(false);
  };

  return (
    <ToolPageLayout
      title="Contact StudyHelperTools"
      metaDescription="Contact StudyHelperTools for support, tool feedback, academic partnerships, or questions about our free academic tools."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-lg border border-border bg-card p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold text-foreground">We read every message.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            For support, collaborations, or feedback, email us directly at:
          </p>
          <a
            href="mailto:hello@studyhelpertools.com"
            className="mt-3 inline-flex items-center gap-2 font-display text-lg font-semibold text-primary hover:underline"
          >
            hello@studyhelpertools.com
          </a>
          <Alert className="mt-6 bg-background">
            <AlertDescription className="text-muted-foreground">
              Messages submitted through the form are routed to the same inbox — replies come from StudyHelperTools.
            </AlertDescription>
          </Alert>
        </section>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Label>Subject</Label>
            <Select value={form.subject} onValueChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjectOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="How can we help?"
              className="min-h-40"
              required
            />
          </div>

          <Button type="submit" className="mt-5 w-full gap-2" disabled={sending}>
            <Send className="h-4 w-4" />
            {sending ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>
    </ToolPageLayout>
  );
};

export default Contact;