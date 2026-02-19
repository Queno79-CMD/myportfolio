import { TerminalCard } from "@/components/kali-desktop/terminal-card";

export function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <TerminalCard title={title} date="~/skills" className="h-full">
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </TerminalCard>
  );
}

