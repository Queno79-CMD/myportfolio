"use client";

import { cn } from "@/lib/utils";

interface KaliPromptProps {
    path?: string;
    user?: string;
    host?: string;
    className?: string;
    children?: React.ReactNode;
}

export function KaliPrompt({
    path = "~",
    user = "kali",
    host = "kali",
    className,
    children
}: KaliPromptProps) {
    return (
        <div className={cn("font-mono text-xs md:text-sm leading-tight select-none", className)}>
            <div className="flex items-center">
                <span className="text-blue-500 font-bold">┌──(</span>
                <span className="text-blue-500 font-bold">{user}㉿{host}</span>
                <span className="text-blue-500 font-bold">)-[</span>
                <span className="text-white font-bold">{path}</span>
                <span className="text-blue-500 font-bold">]</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-blue-500 font-bold">└─$</span>
                {children}
            </div>
        </div>
    );
}
