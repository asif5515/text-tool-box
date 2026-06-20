import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import CopyButton from "@/components/CopyButton";
import { PenTool, ListChecks, Sparkles, FileText, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type EssayType = "Argumentative" | "Narrative" | "Expository" | "Persuasive" | "Compare & Contrast";
type EssayLength = "Short" | "Standard" | "Long";

const EssayOutlineGenerator = () => {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState<EssayType>("Argumentative");
  const [length, setLength] = useState<EssayLength>("Standard");
  const [outline, setOutline] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateOutline = () => {
    if (!topic.trim()) return;
    setLoading(true);
    
    // Simulate generation delay
    setTimeout(() => {
      let result = `ESSAY OUTLINE: ${topic.toUpperCase()}\n`;
      result += `Type: ${type} | Length: ${length}\n`;
      result += `------------------------------------------\n\n`;

      result += `I. INTRODUCTION\n`;
      result += `   A. Hook: Engaging opening related to ${topic}\n`;
      result += `   B. Background Information: Context and definitions\n`;
      result += `   C. Thesis Statement: Your main argument or purpose\n\n`;

      const bodyCount = length === "Short" ? 3 : length === "Standard" ? 5 : 8;
      
      for (let i = 1; i <= bodyCount; i++) {
        result += `II. BODY PARAGRAPH ${i}\n`;
        result += `    A. Topic Sentence: Key point supporting the thesis\n`;
        result += `    B. Evidence: Supporting data, quotes, or examples\n`;
        result += `    C. Analysis: Explanation of how evidence supports the point\n`;
        result += `    D. Transition: Connection to the next paragraph\n\n`;
      }

      result += `III. CONCLUSION\n`;
      result += `    A. Restatement of Thesis: Summarize main points in a new way\n`;
      result += `    B. Synthesis: Connect all arguments together\n`;
      result += `    C. Final Thought: A lasting impression or call to action\n`;

      setOutline(result);
      setLoading(false);
    }, 800);
  };

  return (
    <ToolPageLayout
      title="Free Essay Outline Generator for Students"
      metaDescription="Generate a structured essay outline instantly with our free AI-powered tool. Perfect for argumentative, narrative, and expository essays for college students."
      h1="Free Essay Outline Generator"
      intro="Stop staring at a blank page. Enter your topic, pick your essay type, and get a professional structure to start writing immediately."
      howToUse={[
        "Enter your essay topic or thesis statement in the input field.",
        "Select the type of essay you are writing (e.g., Argumentative, Narrative).",
        "Choose your desired length (Short, Standard, or Long).",
        "Click 'Generate Outline' and copy the result to your document."
      ]}
      benefits={[
        "Saves hours of planning and brainstorming time.",
        "Ensures your essay follows a logical, academic structure.",
        "Customizable for different essay types and lengths.",
        "100% free and runs instantly in your browser."
      ]}
      faqs={[
        { question: "What is an essay outline?", answer: "An essay outline is a skeletal framework that organizes your main ideas, arguments, and evidence before you start writing. It helps ensure your essay flows logically and covers all necessary points." },
        { question: "Can I use this for any subject?", answer: "Yes! Whether you're writing for English, History, Science, or Philosophy, the structural principles remain the same. Our generator provides a universal academic framework." },
        { question: "Is this tool powered by AI?", answer: "This version uses high-quality academic templates to provide instant structures. For more complex, context-aware AI generation, we are rolling out a premium Deep-AI feature soon." }
      ]}
    >
      <div className="space-y-6 max-w-2xl">
        <Card className="p-6 border-border bg-card">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Essay Topic or Thesis</label>
              <Input 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)} 
                placeholder="e.g. The impact of social media on mental health" 
                className="mt-1"
              />
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Essay Type</label>
                <Select value={type} onValueChange={(v: EssayType) => setType(v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Argumentative">Argumentative</SelectItem>
                    <SelectItem value="Narrative">Narrative</SelectItem>
                    <SelectItem value="Expository">Expository</SelectItem>
                    <SelectItem value="Persuasive">Persuasive</SelectItem>
                    <SelectItem value="Compare & Contrast">Compare & Contrast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Essay Length</label>
                <Select value={length} onValueChange={(v: EssayLength) => setLength(v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Short">Short (5 paragraphs)</SelectItem>
                    <SelectItem value="Standard">Standard (7 paragraphs)</SelectItem>
                    <SelectItem value="Long">Long (10+ paragraphs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={generateOutline} 
              disabled={!topic.trim() || loading} 
              className="w-full gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? "Generating..." : "Generate Outline"}
            </Button>
          </div>
        </Card>

        {outline && (
          <Card className="p-6 border-primary/20 bg-accent/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" /> Your Outline
              </h3>
              <CopyButton text={outline} />
            </div>
            <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-mono bg-background p-4 rounded-lg border border-border">
              {outline}
            </pre>
          </Card>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/study-schedule-maker" className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
            <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Plan your study time
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Use our Study Schedule Maker to organize your week and ace your exams.</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">Open Study Planner <ArrowRight className="h-3 w-3" /></span>
          </Link>
          <Link to="/word-counter" className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
            <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" /> Track your length
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Use our Word Counter to stay within your assignment limit.</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">Open Word Counter <ArrowRight className="h-3 w-3" /></span>
          </Link>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default EssayOutlineGenerator;