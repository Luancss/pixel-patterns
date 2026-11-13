import { CopyTextButton } from "@/components/ui/copy-text-button";
import { cn } from "@/lib/utils";

const WINDOW_CONTROL_COLORS = ["#ff5f57", "#febc2e", "#28c840"];

type TerminalBlockProps = {
  commands: string[];
  title?: string;
  className?: string;
};

/** Shell commands in a terminal window, copyable as a single script. */
export function TerminalBlock({
  commands,
  title = "bash",
  className,
}: TerminalBlockProps) {
  return (
    <div
      className={cn(
        "my-4 overflow-hidden rounded-xl border border-white/10 bg-[#0c0c12] shadow-2xl shadow-black/40",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        {WINDOW_CONTROL_COLORS.map((color) => (
          <span
            key={color}
            aria-hidden="true"
            className="size-3 rounded-full"
            style={{ background: color }}
          />
        ))}
        <span className="ml-2 text-xs font-medium text-zinc-500">{title}</span>
        <CopyTextButton
          text={commands.join("\n")}
          successMessage="Commands copied!"
          className="ml-auto"
        />
      </div>
      <div className="custom-scrollbar space-y-1.5 overflow-x-auto px-4 py-4 font-mono text-sm">
        {commands.map((command) => (
          <p
            key={command}
            className="flex gap-3 whitespace-nowrap text-zinc-200"
          >
            <span aria-hidden="true" className="select-none text-emerald-400">
              $
            </span>
            {command}
          </p>
        ))}
      </div>
    </div>
  );
}
