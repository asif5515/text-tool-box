import { Link } from "react-router-dom";
import { GraduationCap, Menu, X, UserCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, loading } = useAuth();

  const moreTools = [
    { name: "Study Planner", path: "/study-schedule-maker" },
    { name: "Pomodoro Timer", path: "/pomodoro-timer" },
    { name: "Outline Generator", path: "/essay-outline-generator" },
    { name: "Word Counter", path: "/word-counter" },
    { name: "Case Converter", path: "/case-converter" },
    { name: "Plagiarism Checker", path: "/plagiarism-checker" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground shrink-0">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">StudyHelperTools</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-5">
              <Link to="/gpa-calculator" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">GPA Calculator</Link>
              <Link to="/cgpa-calculator" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">CGPA Calculator</Link>
              <Link to="/letter-grade-to-gpa-converter" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Grade to GPA</Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground outline-none">
                  More Tools <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-card border-border">
                  {moreTools.map((tool) => (
                    <DropdownMenuItem key={tool.path} asChild>
                      <Link to={tool.path} className="cursor-pointer w-full">
                        {tool.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
            </div>

            <div className="flex items-center gap-3 border-l border-border pl-6">
              <ThemeToggle />
              {!loading && (
                user ? (
                  <Link to="/dashboard" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    <UserCircle className="h-5 w-5" /> Dashboard
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => setAuthOpen(true)}>Login</Button>
                )
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button className="text-foreground p-2" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background p-4 md:hidden animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              <Link to="/gpa-calculator" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">GPA Calculator</Link>
              <Link to="/cgpa-calculator" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">CGPA Calculator</Link>
              <Link to="/letter-grade-to-gpa-converter" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Grade to GPA</Link>
              
              <div className="space-y-3 pl-4 border-l border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">More Tools</p>
                {moreTools.map((tool) => (
                  <Link key={tool.path} to={tool.path} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">
                    {tool.name}
                  </Link>
                ))}
              </div>

              <Link to="/blog" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">Blog</Link>
              
              <div className="pt-4 border-t border-border">
                {!loading && (
                  user ? (
                    <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm font-medium text-primary flex items-center gap-1.5">
                      <UserCircle className="h-5 w-5" /> Dashboard
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full" onClick={() => { setOpen(false); setAuthOpen(true); }}>Login / Sign Up</Button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
};

export default Navbar;