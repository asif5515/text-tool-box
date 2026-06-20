import ToolPageLayout from "@/components/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Coffee, Brain, Bell, ArrowRight, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MODES = {
  POMODORO: { label: "Focus", minutes: 25, color: "text-primary", bg: "bg-primary/10" },
  SHORT_BREAK: { label: "Short Break", minutes: 5, color: "text-blue-500", bg: "bg-blue-500/10" },
  LONG_BREAK: { label: "Long Break", minutes: 15, color: "text-indigo-500", bg: "bg-indigo-500/10" },
};

const PomodoroTimer = () => {
  const { toast } = useToast();
  const [mode, setMode] = useState<keyof typeof MODES>("POMODORO");
  const [timeLeft, setTimeLeft] = useState(MODES.POMODORO.minutes * 60);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSeconds = MODES[mode].minutes * 60;
  const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100;

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
      
      // Notification
      toast({
        title: `${MODES[mode].label} finished!`,
        description: mode === "POMODORO" ? "Time for a well-deserved break." : "Ready to focus again?",
      });
      
      // Play a simple beep sound if possible
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
      } catch (e) {
        console.log("Audio not supported or blocked");
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, mode, toast]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(MODES[mode].minutes * 60);
  };

  const switchMode = (newMode: keyof typeof MODES) => {
    setIsActive(false);
    setMode(newMode);
    setTimeLeft(MODES[newMode].minutes * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ToolPageLayout
      title="Free Online Pomodoro Timer for Students"
      metaDescription="Boost your study productivity with our free Pomodoro Timer. Use the 25/5 technique to stay focused, avoid burnout, and ace your exams."
      h1="Free Online Pomodoro Timer"
      intro="Master your focus with the Pomodoro Technique. Study for 25 minutes, take a 5-minute break, and repeat. It's the most effective way to handle long study sessions without burning out."
      howToUse={[
        "Choose 'Focus' mode to start your 25-minute study block.",
        "Work on a single task with zero distractions until the timer ends.",
        "Take a 'Short Break' (5 mins) to stretch or grab water.",
        "After four focus blocks, take a 'Long Break' (15 mins) to fully recharge.",
        "Repeat the cycle to maintain high productivity all day."
      ]}
      benefits={[
        "Prevents mental fatigue by building in regular breaks.",
        "Improves concentration by encouraging single-tasking.",
        "Helps you track how much time you're actually spending on subjects.",
        "Completely free, no ads in the timer, and runs in your browser."
      ]}
      faqs={[
        { question: "What is the Pomodoro Technique?", answer: "Developed by Francesco Cirillo, it's a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato'." },
        { question: "Why 25 minutes?", answer: "25 minutes is long enough to get meaningful work done but short enough that it's not intimidating. It helps overcome procrastination because anyone can commit to just 25 minutes of work." },
        { question: "Can I change the timer lengths?", answer: "Currently, we use the standard 25/5/15 intervals as they are scientifically proven to be most effective for the majority of students. We are working on a custom timer feature for our registered users." },
        { question: "Should I use this for every subject?", answer: "Yes! It works especially well for reading, writing, and problem-solving. For creative tasks, you might find longer blocks work better, but for standard studying, Pomodoro is king." }
      ]}
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="p-8 md:p-12 border-border bg-card text-center shadow-xl">
          <div className="flex justify-center gap-2 mb-8">
            <Button 
              variant={mode === "POMODORO" ? "default" : "outline"} 
              size="sm" 
              onClick={() => switchMode("POMODORO")}
              className="gap-2"
            >
              <Brain className="h-4 w-4" /> Focus
            </Button>
            <Button 
              variant={mode === "SHORT_BREAK" ? "default" : "outline"} 
              size="sm" 
              onClick={() => switchMode("SHORT_BREAK")}
              className="gap-2"
            >
              <Coffee className="h-4 w-4" /> Short Break
            </Button>
            <Button 
              variant={mode === "LONG_BREAK" ? "default" : "outline"} 
              size="sm" 
              onClick={() => switchMode("LONG_BREAK")}
              className="gap-2"
            >
              <Bell className="h-4 w-4" /> Long Break
            </Button>
          </div>

          <div className="relative inline-flex items-center justify-center mb-8">
            <div className={`font-display text-7xl md:text-9xl font-bold tabular-nums ${MODES[mode].color}`}>
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="max-w-md mx-auto mb-10">
            <Progress value={progress} className="h-2" />
            <p className="mt-2 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              {MODES[mode].label} Progress
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              onClick={toggleTimer} 
              className="w-32 h-14 text-lg gap-2"
            >
              {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              {isActive ? "Pause" : "Start"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={resetTimer} 
              className="w-14 h-14 p-0"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/study-schedule-maker" className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
            <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Need a full plan?
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Use our Study Schedule Maker to organize your entire week.</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">Open Study Planner <ArrowRight className="h-3 w-3" /></span>
          </Link>
          <Link to="/word-counter" className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
            <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary" /> Writing an essay?
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Track your word count in real-time as you work through your Pomodoros.</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">Open Word Counter <ArrowRight className="h-3 w-3" /></span>
          </Link>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default PomodoroTimer;