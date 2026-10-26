"use client";

import { Check, Code2, Copy, Eye, FileCode2, WrapText, X } from "lucide-react";
import { memo, type ReactNode, useMemo, useState } from "react";

import { CodeView } from "@/components/snippets/code-view";
import { HighlightThemePicker } from "@/components/snippets/highlight-theme-picker";
import { useHighlightThemeStore } from "@/components/snippets/highlight-theme-store";
import { getHighlightTheme } from "@/components/snippets/highlight-themes";
import {
  type PreviewSurface,
  SnippetFrame,
} from "@/components/snippets/snippet-frame";
import { getSnippetCode } from "@/components/snippets/snippet-preview";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";
import { cn } from "@/lib/utils";
import type { Snippet, SnippetCategory } from "@/types/snippet";

type PreviewView = "preview" | "code";

const VIEW_OPTIONS: SegmentedControlOption<PreviewView>[] = [
  { value: "preview", label: "Preview", icon: <Eye className="size-3.5" /> },
  { value: "code", label: "Code", icon: <Code2 className="size-3.5" /> },
];

const SURFACE_OPTIONS: SegmentedControlOption<PreviewSurface>[] = [
  { value: "original", label: "Original" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "grid", label: "Grid" },
];

const CATEGORY_LABELS: Record<SnippetCategory, string> = {
  css: "HTML + CSS",
  tailwind: "Tailwind CSS",
};

const MemoizedCodeView = memo(CodeView);

type CodePreviewDialogProps = {
  snippet: Snippet;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  isCopied: boolean;
  onCopy: () => void;
};

type PreviewContentProps = Pick<
  CodePreviewDialogProps,
  "snippet" | "isCopied" | "onCopy"
>;

function PaneHeader({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4">
      <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-zinc-400">
        {title}
      </div>
      <div className="flex min-w-0 items-center gap-2">{children}</div>
    </div>
  );
}

function CopyCodeButton({
  isCopied,
  onCopy,
}: Pick<PreviewContentProps, "isCopied" | "onCopy">) {
  const Icon = isCopied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={isCopied ? "Code copied" : "Copy code"}
      className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg bg-white px-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c12]"
    >
      <Icon className="size-4" />
      <span className="hidden sm:inline">
        {isCopied ? "Copied" : "Copy code"}
      </span>
    </button>
  );
}

function PreviewContent({ snippet, isCopied, onCopy }: PreviewContentProps) {
  const [view, setView] = useState<PreviewView>("code");
  const [surface, setSurface] = useState<PreviewSurface>("original");
  const [wrapLines, setWrapLines] = useState(true);
  const themeName = useHighlightThemeStore((state) => state.themeName);
  const theme = getHighlightTheme(themeName);
  const code = useMemo(() => getSnippetCode(snippet), [snippet]);
  const lineCount = code.split("\n").length;

  return (
    <>
      <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="hidden size-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 sm:flex">
          <Code2 className="size-4 text-zinc-300" />
        </div>
        <div className="min-w-0 flex-1">
          <DialogTitle className="text-sm font-semibold text-white sm:text-base">
            Code preview
          </DialogTitle>
          <DialogDescription className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
            <span className="rounded-md bg-blue-500/10 px-1.5 py-0.5 font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20">
              {CATEGORY_LABELS[snippet.category]}
            </span>
            <span>{lineCount} lines</span>
          </DialogDescription>
        </div>
        <CopyCodeButton isCopied={isCopied} onCopy={onCopy} />
        <DialogClose className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </div>

      <div className="shrink-0 border-b border-white/10 px-4 py-2 lg:hidden">
        <SegmentedControl
          label="View"
          options={VIEW_OPTIONS}
          value={view}
          onValueChange={setView}
          className="flex w-full"
        />
      </div>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <section
          aria-label="Preview"
          className={cn(
            "min-h-0 flex-col lg:flex lg:border-r lg:border-white/10",
            view === "preview" ? "flex" : "hidden"
          )}
        >
          <PaneHeader title="Preview">
            <SegmentedControl
              label="Preview background"
              options={SURFACE_OPTIONS}
              value={surface}
              onValueChange={setSurface}
            />
          </PaneHeader>
          <div className="min-h-0 flex-1">
            <SnippetFrame
              markup={code}
              background={snippet.background}
              surface={surface}
            />
          </div>
        </section>

        <section
          aria-label="Code"
          className={cn(
            "min-h-0 flex-col lg:flex",
            view === "code" ? "flex" : "hidden"
          )}
        >
          <PaneHeader
            title={
              <>
                <FileCode2 className="size-4 shrink-0" />
                <span className="hidden truncate sm:inline">
                  component.html
                </span>
              </>
            }
          >
            <HighlightThemePicker />
            <button
              type="button"
              aria-pressed={wrapLines}
              aria-label="Wrap long lines"
              title="Wrap long lines"
              onClick={() => setWrapLines(!wrapLines)}
              className={cn(
                "inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                wrapLines
                  ? "bg-white/10 text-white"
                  : "bg-white/5 text-zinc-400 hover:text-zinc-200"
              )}
            >
              <WrapText className="size-4" />
            </button>
          </PaneHeader>
          <MemoizedCodeView
            code={code}
            language="markup"
            theme={theme}
            wrap={wrapLines}
            className="min-h-0 flex-1"
          />
        </section>
      </div>
    </>
  );
}

export function CodePreviewDialog({
  snippet,
  isOpen,
  onOpenChange,
  isCopied,
  onCopy,
}: CodePreviewDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[min(48rem,calc(100dvh-2rem))] w-[calc(100vw-2rem)] max-w-6xl flex-col gap-0 overflow-hidden rounded-xl border-white/10 bg-[#0c0c12] p-0 text-zinc-100 shadow-2xl shadow-black/60 sm:rounded-2xl">
        <PreviewContent snippet={snippet} isCopied={isCopied} onCopy={onCopy} />
      </DialogContent>
    </Dialog>
  );
}
