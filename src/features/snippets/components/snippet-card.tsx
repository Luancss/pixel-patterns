"use client";

import { Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

import { SnippetPreview } from "@/features/snippets/components/snippet-preview";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";
import { getSnippetCode } from "@/features/snippets/lib/get-snippet-code";
import { cn } from "@/lib/utils";
import type {
  Snippet,
  SnippetCardSize,
  SnippetCategory,
} from "@/features/snippets/types";

const CodePreviewDialog = dynamic(() =>
  import("@/features/snippets/components/code-preview-dialog").then(
    (mod) => mod.CodePreviewDialog
  )
);

const CARD_SIZES: Record<SnippetCardSize, { section: string; frame: string }> =
  {
    compact: {
      section: "mx-auto justify-center",
      frame: "w-[300px] h-[250px]",
    },
    wide: {
      section: "mx-auto justify-items-center",
      frame: "w-[370px] h-[400px] md:w-[500px] md:h-[400px] p-4",
    },
    large: {
      section: "mx-auto",
      frame:
        "w-[350px] py-16 md:py-0 ml-auto md:w-[600px] md:h-[600px] overflow-x-scroll md:overflow-hidden",
    },
  };

const CATEGORY_LABELS: Record<SnippetCategory, string> = {
  css: "CSS",
  tailwind: "Tailwind",
};

const ACTION_CLASS_NAME =
  "absolute top-2 z-10 rounded-lg opacity-80 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-blue-500 focus-visible:ring-offset-0";

type SnippetCardProps = {
  snippet: Snippet;
  size: SnippetCardSize;
};

export function SnippetCard({ snippet, size }: SnippetCardProps) {
  const { section, frame } = CARD_SIZES[size];
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { isCopied, copy } = useCopyToClipboard(CODE_COPY_MESSAGES);

  const copyCode = () => copy(getSnippetCode(snippet));

  return (
    <section className={section}>
      <div
        className={cn(
          "group/card flex flex-col items-center justify-center rounded-xl relative mr-4 ring-1 ring-inset ring-white/5 transition-shadow duration-300 hover:ring-white/15 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]",
          frame,
          snippet.background
        )}
      >
        <Button
          variant="link"
          aria-label="Open code preview"
          title="Open code preview"
          className={cn(ACTION_CLASS_NAME, "left-2 flex items-center")}
          onClick={() => setIsPreviewOpen(true)}
        >
          <Code2 size={20} color={snippet.iconColor} />
        </Button>
        <CopyButton
          isCopied={isCopied}
          onCopy={copyCode}
          color={snippet.iconColor}
          className={cn(ACTION_CLASS_NAME, "right-2")}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider opacity-0 transition-opacity duration-300 group-hover/card:opacity-70 group-focus-within/card:opacity-70"
          style={{
            color: snippet.iconColor,
            border: `1px solid color-mix(in srgb, ${snippet.iconColor} 30%, transparent)`,
          }}
        >
          {CATEGORY_LABELS[snippet.category]}
        </span>
        <div
          className="flex items-center justify-center rounded-xl"
          onSubmit={(event) => event.preventDefault()}
        >
          <SnippetPreview snippet={snippet} />
        </div>
      </div>

      <CodePreviewDialog
        snippet={snippet}
        isOpen={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        isCopied={isCopied}
        onCopy={copyCode}
      />
    </section>
  );
}
