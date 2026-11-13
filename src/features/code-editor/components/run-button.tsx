"use client";

import { Loader2, Play, Square } from "lucide-react";

import { RunShortcutHint } from "@/features/code-editor/components/keyboard-shortcuts";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { cn } from "@/lib/utils";

export function RunButton({ className }: { className?: string }) {
  const runCode = useCodeEditorStore((state) => state.runCode);
  const cancelRun = useCodeEditorStore((state) => state.cancelRun);
  const isRunning = useCodeEditorStore((state) => state.isRunning);

  return (
    <button
      type="button"
      onClick={isRunning ? cancelRun : () => void runCode()}
      aria-label={isRunning ? "Stop execution" : "Run code"}
      className={cn(
        "group relative inline-flex h-8 sm:min-w-[7.25rem] shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg px-2.5 sm:pr-1.5 text-sm font-semibold text-white shadow-lg ring-1 ring-inset transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c12] active:scale-[0.98]",
        isRunning
          ? "bg-zinc-800 ring-white/10 hover:bg-zinc-700"
          : "bg-gradient-to-b from-blue-500 to-blue-600 shadow-blue-600/25 ring-white/20 hover:from-blue-400 hover:to-blue-600",
        className
      )}
    >
      {!isRunning && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
        />
      )}
      {isRunning ? (
        <>
          <Loader2 className="size-4 animate-spin text-blue-300" />
          <span>Stop</span>
          <Square className="size-3 fill-current text-red-400" />
        </>
      ) : (
        <>
          <Play className="size-3.5 fill-current" />
          <span>Run</span>
          <RunShortcutHint className="hidden sm:inline-flex [&_kbd]:border-white/25 [&_kbd]:bg-white/15 [&_kbd]:text-white/90" />
        </>
      )}
    </button>
  );
}
