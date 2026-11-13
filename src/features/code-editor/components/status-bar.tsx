"use client";

import { Cpu, HardDriveDownload } from "lucide-react";
import type { ReactNode } from "react";

import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { getEditorTheme } from "@/features/code-editor/config/editor-themes";
import { formatDuration } from "@/features/code-editor/lib/format-duration";
import {
  getRuntimeLabel,
  LANGUAGES,
} from "@/features/code-editor/config/languages";
import { cn } from "@/lib/utils";

function StatusItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  );
}

function RunStatus() {
  const isRunning = useCodeEditorStore((state) => state.isRunning);
  const result = useCodeEditorStore((state) => state.result);

  const [label, dotClassName] = isRunning
    ? ["Running…", "bg-blue-400 animate-pulse"]
    : result?.status === "success"
      ? [`Finished in ${formatDuration(result.durationMs)}`, "bg-emerald-400"]
      : result?.status === "error"
        ? ["Finished with errors", "bg-red-400"]
        : ["Ready", "bg-zinc-500"];

  return (
    <StatusItem className="text-zinc-400">
      <span className={cn("size-1.5 rounded-full", dotClassName)} />
      {label}
    </StatusItem>
  );
}

function CursorStatus() {
  const { line, column, selectedCharacters } = useCodeEditorStore(
    (state) => state.cursor
  );

  return (
    <StatusItem className="tabular-nums">
      Ln {line}, Col {column}
      {selectedCharacters > 0 && ` (${selectedCharacters} selected)`}
    </StatusItem>
  );
}

function LineCount() {
  const lineCount = useCodeEditorStore(
    (state) => state.code.split("\n").length
  );

  return (
    <StatusItem className="hidden tabular-nums sm:inline-flex">
      {lineCount} {lineCount === 1 ? "line" : "lines"}
    </StatusItem>
  );
}

export function StatusBar() {
  const language = useCodeEditorStore((state) => state.language);
  const theme = useCodeEditorStore((state) => state.theme);
  const definition = LANGUAGES[language];

  return (
    <footer
      aria-label="Editor status"
      className="flex h-8 items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-[#0c0c12]/80 px-3 text-[11px] text-zinc-500 backdrop-blur"
    >
      <RunStatus />
      <CursorStatus />
      <LineCount />
      <StatusItem className="ml-auto hidden md:inline-flex">
        <HardDriveDownload className="size-3.5" />
        Auto-saved in this browser
      </StatusItem>
      <StatusItem className="ml-auto md:ml-0">
        <Cpu className="size-3.5" />
        {getRuntimeLabel(definition)}
      </StatusItem>
      <StatusItem className="hidden lg:inline-flex">
        {getEditorTheme(theme).label}
      </StatusItem>
      <StatusItem className="hidden text-zinc-400 sm:inline-flex">
        {definition.label}
      </StatusItem>
    </footer>
  );
}
