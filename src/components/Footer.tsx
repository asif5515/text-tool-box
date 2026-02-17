import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <GraduationCap className="h-5 w-5 text-primary" />
            StudyHelperTool
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Free, premium-quality study tools for students everywhere.</p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground">Tools</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/gpa-calculator" className="hover:text-foreground transition-colors">GPA Calculator</Link></li>
            <li><Link to="/case-converter" className="hover:text-foreground transition-colors">Case Converter</Link></li>
            <li><Link to="/word-counter" className="hover:text-foreground transition-colors">Word Counter</Link></li>
            <li><Link to="/gpa-to-percentage" className="hover:text-foreground transition-colors">GPA to Percentage</Link></li>
            <li><Link to="/plagiarism-checker" className="hover:text-foreground transition-colors">Plagiarism Checker</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} StudyHelperTool. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
