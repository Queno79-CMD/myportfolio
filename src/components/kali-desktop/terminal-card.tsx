"use client";

import { cn } from "@/lib/utils";
import { KaliPrompt } from "@/components/kali-desktop/prompt";

interface TerminalCardProps {
    title: string;
    subtitle?: string;
    date?: string;
    children: React.ReactNode;
    className?: string;
}

export function TerminalCard({
    title,
    subtitle,
    date,
    children,
    className
}: TerminalCardProps) {
    return (
        <div className={cn("group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950/50 p-4 transition-all hover:border-blue-500/50 hover:bg-slate-900/80", className)}>
            {/* Header / Prompt Line */}
            <div className="mb-3 flex flex-col gap-1 border-b border-white/5 pb-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>terminal</span>
                    <span>{date}</span>
                </div>
                <KaliPrompt path="~/info">
                    <span className="text-emerald-400 font-bold ml-1">{title}</span>
                </KaliPrompt>
            </div>

            {/* Content Body */}
            <div className="font-mono text-sm text-slate-300 pl-2 border-l-2 border-slate-800 group-hover:border-blue-500/30 transition-colors">
                {subtitle && (
                    <div className="mb-2 text-cyan-400 font-semibold">
                        {subtitle}
                    </div>
                )}
                <div className="opacity-90 leading-relaxed">
                    {children}
                </div>
            </div>

            {/* Bottom Prompt decoration */}
            <div className="mt-3 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-500 font-bold text-xs">└─$</span>
                <span className="h-4 w-2 bg-emerald-500/50 animate-pulse"></span>
            </div>
        </div>
    );
}
