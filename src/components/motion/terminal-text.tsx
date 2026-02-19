"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { KaliPrompt } from "@/components/kali-desktop/prompt";

interface TerminalTextProps {
  className?: string;
}

export function TerminalText({ className }: TerminalTextProps) {
  const [commandText, setCommandText] = useState("");
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  const command = "./init_profile.sh";

  const outputs = [
    "[+] Initializing secure environment...",
    "[+] Loading kernel modules...",
    "[+] Bypassing firewalls...",
    "Access Granted."
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Phase 1: Type the command
    const typeCommand = (index: number) => {
      if (index <= command.length) {
        setCommandText(command.slice(0, index));
        timeoutId = setTimeout(() => typeCommand(index + 1), 50 + Math.random() * 50);
      } else {
        // Command finished, start output after delay
        timeoutId = setTimeout(() => showOutput(0), 400);
      }
    };

    // Phase 2: Show output lines one by one
    const showOutput = (index: number) => {
      if (index < outputs.length) {
        setOutputLines(outputs.slice(0, index + 1));
        timeoutId = setTimeout(() => showOutput(index + 1), 600);
      }
    };

    // Start
    timeoutId = setTimeout(() => typeCommand(0), 800);

    return () => clearTimeout(timeoutId);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={cn("font-mono text-sm leading-relaxed space-y-2", className)}>
      {/* Command Line */}
      <KaliPrompt>
        <span className="text-emerald-400">{commandText}</span>
        <span
          className={cn(
            "ml-1 inline-block h-4 w-2 bg-slate-400 align-middle",
            showCursor && outputLines.length === 0 ? "opacity-100" : "opacity-0"
          )}
        />
      </KaliPrompt>

      {/* Output Lines */}
      <div className="flex flex-col gap-1 pl-2 text-slate-300">
        {outputLines.map((line, i) => (
          <div
            key={i}
            className={cn(
              i === outputs.length - 1
                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold text-lg mt-2"
                : "text-slate-300"
            )}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
