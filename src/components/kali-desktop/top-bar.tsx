import { KaliLogo } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function TopBar({ className }: { className?: string }) {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    return (
        <div className={cn("flex h-8 w-full items-center justify-between bg-[#1f2335] px-3 text-[13px] text-slate-300 shadow-md z-50", className)}>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-bold text-slate-100 hover:bg-white/5 px-2 py-1 rounded cursor-pointer transition-colors">
                    <KaliLogo className="h-4 w-4 text-slate-100" />
                    <span>Applications</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-slate-400">
                    <span className="hover:text-slate-200 cursor-pointer">Places</span>
                    <span className="hover:text-slate-200 cursor-pointer">System</span>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 font-semibold tracking-wide hidden sm:block">
                {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} &nbsp; {time}
            </div>

            <div className="flex items-center gap-3">
                <div className="flex space-x-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="h-4 w-[1px] bg-slate-700" />
                <span className="font-mono text-xs">enock@kali:~$</span>
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 opacity-80" />
            </div>
        </div>
    );
}
