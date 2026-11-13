"use client";

import {
  Ban,
  Check,
  CircleCheck,
  CircleX,
  Copy,
  Cpu,
  Info,
  Keyboard,
  Terminal,
  Trash2,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { RunShortcutHint } from "@/features/code-editor/components/keyboard-shortcuts";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "@/features/code-editor/components/panel";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { formatDuration } from "@/features/code-editor/lib/format-duration";
import {
  getRuntimeLabel,
  LANGUAGES,
} from "@/features/code-editor/config/languages";
import { editorFont } from "@/features/code-editor/lib/monaco-setup";
import type {
  ExecutionResult,
  ExecutionStatus,
  OutputStream,
} from "@/features/code-editor/types";
import { IconButton } from "@/components/ui/icon-button";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type OutputTab = "console" | "input";

const STATUS_STYLES: Record<
  ExecutionStatus,
  { label: string; className: string; icon: typeof CircleCheck }
> = {
  success: {
    label: "Success",
    className: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
    icon: CircleCheck,
  },
  error: {
    label: "Failed",
    className: "bg-red-500/10 text-red-300 ring-red-500/20",
    icon: CircleX,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-zinc-500/10 text-zinc-300 ring-zinc-500/20",
    icon: Ban,
  },
};

const STREAM_CLASS_NAMES: Record<OutputStream, string> = {
  stdout: "text-zinc-200",
  stderr: "text-red-300",
  system: "italic text-zinc-500",
};

function ExecutionBadge() {
  const isRunning = useCodeEditorStore((state) => state.isRunning);
  const result = useCodeEditorStore((state) => state.result);

  if (isRunning) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-blue-400" />
        </span>
        Running
      </span>
    );
  }

  if (!result) return null;

  const { label, className, icon: Icon } = STATUS_STYLES[result.status];
  return (
    <span className="flex min-w-0 items-center gap-2">
      <span
        className={cn(
          "inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset",
          className
        )}
      >
        <Icon className="size-3" />
        {label}
      </span>
      <span className="hidden truncate text-[11px] tabular-nums text-zinc-500 sm:inline">
        {result.exitCode !== null && `exit ${result.exitCode} · `}
        {formatDuration(result.durationMs)}
      </span>
    </span>
  );
}

function RunningState({ fileName }: { fileName: string }) {
  return (
    <div className="space-y-2 p-4">
      <p className="text-zinc-400">
        <span className="select-none text-emerald-400">$ </span>
        run {fileName}
      </p>
      <div className="flex items-center gap-1.5" aria-label="Running">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-1.5 animate-bounce rounded-full bg-blue-400"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function EmptyState({ runtimeLabel }: { runtimeLabel: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center font-sans">
      <div className="flex size-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
        <Terminal className="size-5 text-zinc-400" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-zinc-200">No output yet</p>
        <p className="flex items-center justify-center gap-1.5 text-xs text-zinc-500">
          Press <RunShortcutHint /> to run your code
        </p>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400 ring-1 ring-inset ring-white/10">
        <Cpu className="size-3" />
        {runtimeLabel}
      </span>
    </div>
  );
}

function ResultView({ result }: { result: ExecutionResult }) {
  return (
    <div className="p-4">
      {result.notice && (
        <div className="mb-4 flex gap-2.5 rounded-lg bg-amber-500/10 p-3 font-sans text-xs leading-relaxed text-amber-200 ring-1 ring-inset ring-amber-500/20">
          <Info className="mt-0.5 size-4 shrink-0 text-amber-400" />
          <p>{result.notice}</p>
        </div>
      )}
      {result.lines.length > 0 ? (
        <ol className="space-y-0.5">
          {result.lines.map((line, index) => (
            <li key={index} className="flex gap-4">
              <span
                aria-hidden="true"
                className="w-6 shrink-0 select-none text-right tabular-nums text-zinc-600"
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "min-w-0 flex-1 whitespace-pre-wrap break-words",
                  STREAM_CLASS_NAMES[line.stream]
                )}
              >
                {line.text}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="italic text-zinc-500">
          The program finished without output.
        </p>
      )}
      {result.exitCode !== null && (
        <p
          className={cn(
            "mt-4 border-t border-white/5 pt-3 text-xs",
            result.status === "success"
              ? "text-emerald-400/80"
              : "text-red-400/80"
          )}
        >
          Process exited with code {result.exitCode} in{" "}
          {formatDuration(result.durationMs)}
        </p>
      )}
    </div>
  );
}

function ConsoleView() {
  const isRunning = useCodeEditorStore((state) => state.isRunning);
  const result = useCodeEditorStore((state) => state.result);
  const language = useCodeEditorStore((state) => state.language);
  const definition = LANGUAGES[language];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [result]);

  return (
    <div
      ref={scrollRef}
      role="log"
      aria-live="polite"
      aria-busy={isRunning}
      className={cn(
        "custom-scrollbar h-full overflow-auto bg-[#08080f] text-[13px] leading-6",
        editorFont.className
      )}
    >
      {isRunning ? (
        <RunningState fileName={definition.fileName} />
      ) : result ? (
        <ResultView result={result} />
      ) : (
        <EmptyState runtimeLabel={getRuntimeLabel(definition)} />
      )}
    </div>
  );
}

function StdinInput() {
  const id = useId();
  const stdin = useCodeEditorStore((state) => state.stdin);
  const setStdin = useCodeEditorStore((state) => state.setStdin);
  const language = useCodeEditorStore((state) => state.language);
  const runsInBrowser = LANGUAGES[language].runtime.kind === "browser";

  return (
    <div className="flex h-full flex-col bg-[#08080f]">
      <label htmlFor={id} className="sr-only">
        Program input
      </label>
      <textarea
        id={id}
        value={stdin}
        onChange={(event) => setStdin(event.target.value)}
        spellCheck={false}
        placeholder={
          "Text sent to your program's standard input.\nOne value per line."
        }
        className={cn(
          "custom-scrollbar min-h-0 flex-1 resize-none bg-transparent p-4 text-[13px] leading-6 text-zinc-200 outline-none placeholder:text-zinc-600",
          editorFont.className
        )}
      />
      <p className="flex items-center gap-2 border-t border-white/5 px-4 py-2 text-[11px] text-zinc-500">
        <Info className="size-3.5 shrink-0" />
        {runsInBrowser
          ? "Read each line with prompt() in JavaScript and TypeScript."
          : "Read it as you would from a terminal, e.g. input() in Python."}
      </p>
    </div>
  );
}

export function CodeOutputPanel() {
  const [tab, setTab] = useState<OutputTab>("console");
  const result = useCodeEditorStore((state) => state.result);
  const stdin = useCodeEditorStore((state) => state.stdin);
  const clearOutput = useCodeEditorStore((state) => state.clearOutput);
  const { isCopied, copy } = useCopyToClipboard({
    success: "Output copied!",
    error: "Failed to copy!",
  });
  const output = result?.lines.map((line) => line.text).join("\n") ?? "";
  const stdinLines = stdin ? stdin.split(/\r?\n/).length : 0;

  const tabOptions: SegmentedControlOption<OutputTab>[] = [
    {
      value: "console",
      label: "Console",
      icon: <Terminal className="size-3.5" />,
    },
    {
      value: "input",
      label: "Input",
      icon: <Keyboard className="size-3.5" />,
      count: stdinLines || undefined,
    },
  ];

  return (
    <Panel aria-label="Program output" className="h-full">
      <PanelHeader>
        <SegmentedControl
          label="Output view"
          options={tabOptions}
          value={tab}
          onValueChange={setTab}
        />
        <ExecutionBadge />
        <div className="ml-auto flex items-center">
          <IconButton
            label={isCopied ? "Output copied" : "Copy output"}
            disabled={!output}
            onClick={() => copy(output)}
          >
            {isCopied ? <Check className="text-emerald-400" /> : <Copy />}
          </IconButton>
          <IconButton
            label="Clear console"
            tooltipAlign="end"
            disabled={!result}
            onClick={clearOutput}
          >
            <Trash2 />
          </IconButton>
        </div>
      </PanelHeader>
      <PanelBody>
        {tab === "console" ? <ConsoleView /> : <StdinInput />}
      </PanelBody>
    </Panel>
  );
}
