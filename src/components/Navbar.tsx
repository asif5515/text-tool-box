import { Link } from "react-router-dom";
import { GraduationCap, Menu, X, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
            <GraduationCap className="h-6 w-6 text-primary" />
            StudyHelperTools
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-5 md:flex">
            <Link to="/gpa-calculator" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">GPA Calculator</Link>
            <Link to="/cgpa-calculator" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">CGPA</Link>
            <Link to="/case-converter" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Case Converter</Link>
            <Link to="/word-counter" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Word Counter</Link>
            <Link to="/gpa-to-percentage" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">GPA to %</Link>
            <Link to="/plagiarism-checker" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Plagiarism</Link>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
            <ThemeToggle />
            {!loading && (
              user ? (
                <Link to="/dashboard" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  <UserCircle className="h-5 w-5" /> Dashboard
                </Link>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setAuthOpen(true)}>Login / Sign Up</Button>
              )
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link to="/gpa-calculator" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">GPA Calculator</Link>
              <Link to="/cgpa-calculator" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">CGPA Calculator</Link>
              <Link to="/case-converter" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Case Converter</Link>
              <Link to="/word-counter" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Word Counter</Link>
              <Link to="/gpa-to-percentage" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">GPA to %</Link>
              <Link to="/plagiarism-checker" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Plagiarism Checker</Link>
              <Link to="/blog" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Blog</Link>
              {!loading && (
                user ? (
                  <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm font-medium text-primary flex items-center gap-1.5">
                    <UserCircle className="h-4 w-4" /> Dashboard
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => { setOpen(false); setAuthOpen(true); }}>Login / Sign Up</Button>
                )
              )}
            </div>
          </div>
        )}
      </nav>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
};

export default Navbar;
