import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import FloatingGPAWidget from "@/components/FloatingGPAWidget";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GPACalculator from "./pages/GPACalculator";
import CGPACalculator from "./pages/CGPACalculator";
import CaseConverter from "./pages/CaseConverter";
import WordCounter from "./pages/WordCounter";
import GPAToPercentage from "./pages/GPAToPercentage";
import PlagiarismChecker from "./pages/PlagiarismChecker";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import Dashboard from "@/pages/Dashboard";
import BlogGPAToPercentageGuide from "./pages/BlogGPAToPercentageGuide";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gpa-calculator" element={<GPACalculator />} />
            <Route path="/cgpa-calculator" element={<CGPACalculator />} />
            <Route path="/case-converter" element={<CaseConverter />} />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/gpa-to-percentage" element={<GPAToPercentage />} />
            <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/gpa-to-percentage-guide" element={<BlogGPAToPercentageGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingGPAWidget />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
