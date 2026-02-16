import { Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <GraduationCap className="h-6 w-6 text-primary" />
          StudyHelperTool
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/gpa-calculator" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">GPA Calculator</Link>
          <Link to="/case-converter" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Case Converter</Link>
          <Link to="/word-counter" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Word Counter</Link>
          <Link to="/gpa-to-percentage" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">GPA to %</Link>
          <Link to="/plagiarism-checker" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Plagiarism Checker</Link>
          <Button variant="outline" size="sm" className="ml-2" disabled>Login / Sign Up</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/gpa-calculator" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">GPA Calculator</Link>
            <Link to="/case-converter" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Case Converter</Link>
            <Link to="/word-counter" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Word Counter</Link>
            <Link to="/gpa-to-percentage" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">GPA to %</Link>
            <Link to="/plagiarism-checker" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Plagiarism Checker</Link>
            <Button variant="outline" size="sm" disabled>Login / Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
