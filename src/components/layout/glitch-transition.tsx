"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import type React from "react";

const bootLogs = [
  "[  OK  ] Started Graphical Interface.",
  "[  OK  ] Reached target Graphical Interface.",
  "         Starting Update UTMP about System Runlevel Changes...",
  "[  OK  ] Started Update UTMP about System Runlevel Changes.",
  "         Starting Hostname Service...",
  "[  OK  ] Started Hostname Service.",
  "[  OK  ] Started Dispatch Password Requests to Console Directory Watch.",
  "[FAILED] Failed to start Load Kernel Modules.",
  "See 'systemctl status systemd-modules-load.service' for details.",
  "         Mounting FUSE Control File System...",
  "[  OK  ] Mounted FUSE Control File System.",
  "[  OK  ] Started Apply Kernel Variables.",
  "         Starting Create Volatile Files and Directories...",
  "[  OK  ] Started Create Volatile Files and Directories.",
  "         Starting Network Time Synchronization...",
  "[  OK  ] Started Network Time Synchronization.",
  "[  OK  ] Reached target System Time Synchronized.",
  "[ERROR]  Segmentation fault at 0x00007fff",
  "[WARN]   Buffer overflow detected in process 1337",
  "[INFO]   Injecting shellcode...",
  "[  OK  ] Root access granted.",
  "[  OK  ] Initializing Kali Linux Desktop Environment...",
];

const GlitchContext = createContext({ triggerGlitch: () => { } });

export const useGlitch = () => useContext(GlitchContext);

export function GlitchTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLogs, setShowLogs] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [triggerCount, setTriggerCount] = useState(0);

  const triggerGlitch = () => {
    setTriggerCount((prev) => prev + 1);
  };

  useEffect(() => {
    // Trigger logs on path change AND manual trigger
    setShowLogs(true);
    setLogs([]); // Reset logs

    let interval: NodeJS.Timeout;
    let counter = 0;

    // Fast scroll effect
    interval = setInterval(() => {
      if (counter >= bootLogs.length) {
        clearInterval(interval);
        setTimeout(() => setShowLogs(false), 200); // Hide after done
        return;
      }
      const nextLog = bootLogs[counter];
      if (nextLog) {
        setLogs((prev) => [...prev, nextLog]);
      }
      counter++;
    }, 30); // Very fast typing

    return () => clearInterval(interval);
  }, [pathname, triggerCount]);

  return (
    <GlitchContext.Provider value={{ triggerGlitch }}>
      <div className="relative min-h-screen w-full">
        <AnimatePresence mode="wait">
          {showLogs && (
            <motion.div
              key="boot-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex flex-col justify-end bg-black p-4 font-mono text-xs md:text-sm text-slate-300 overflow-hidden"
            >
              <div className="mb-4 text-emerald-500 font-bold">
                kali-linux-rolling login: root
              </div>
              {logs.map((log, i) => {
                if (!log) return null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${log.includes("[FAILED]") || log.includes("[ERROR]")
                        ? "text-red-500 font-bold"
                        : log.includes("[WARN]")
                          ? "text-yellow-400"
                          : log.includes("[  OK  ]")
                            ? "text-emerald-400"
                            : "text-slate-300"
                      }`}
                  >
                    {log}
                  </motion.div>
                );
              })}
              <div className="animate-pulse text-emerald-500 mt-2">_</div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: showLogs ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </GlitchContext.Provider>
  );
}
