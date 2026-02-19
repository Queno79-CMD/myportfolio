"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";

interface WindowProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    defaultPosition?: { x: number; y: number };
    width?: number | string;
}

export function Window({
    title,
    icon,
    children,
    className,
    defaultPosition = { x: 0, y: 0 },
    width = "auto",
}: WindowProps) {
    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9, x: defaultPosition.x, y: defaultPosition.y }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "absolute flex flex-col overflow-hidden rounded-lg bg-[#1a1b26]/90 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.6)] backdrop-blur-md ring-1 ring-white/10",
                className
            )}
            style={{ width }}
        >
            {/* Title Bar */}
            <div className="flex h-9 items-center justify-between border-b border-white/5 bg-[#16161e]/80 px-4 handle cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-3">
                    {icon}
                    <span className="text-xs font-semibold tracking-wide text-slate-300">
                        {title}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-700/50 hover:bg-slate-600 transition-colors" />
                    <div className="h-3 w-3 rounded-full bg-slate-700/50 hover:bg-slate-600 transition-colors" />
                    <div className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer" />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-[#1a1b26]/50 p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                {children}
            </div>
        </motion.div>
    );
}
