import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GPACalculator from "./pages/GPACalculator";
import CaseConverter from "./pages/CaseConverter";
import WordCounter from "./pages/WordCounter";
import GPAToPercentage from "./pages/GPAToPercentage";
import PlagiarismChecker from "./pages/PlagiarismChecker";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gpa-calculator" element={<GPACalculator />} />
          <Route path="/case-converter" element={<CaseConverter />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/gpa-to-percentage" element={<GPAToPercentage />} />
          <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
