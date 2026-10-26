"use client";

import { Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

import {
  getSnippetCode,
  SnippetPreview,
} from "@/components/snippets/snippet-preview";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import type { Snippet } from "@/types/snippet";

const CodePreviewDialog = dynamic(() =>
  import("@/components/snippets/code-preview-dialog").then(
    (mod) => mod.CodePreviewDialog
  )
);

const CARD_SIZES = {
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

export type SnippetCardSize = keyof typeof CARD_SIZES;

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
          "flex flex-col items-center justify-center rounded-xl relative mr-4",
          frame,
          snippet.background
        )}
      >
        <Button
          variant="link"
          aria-label="Open code preview"
          className="absolute top-2 left-2 z-10 flex items-center"
          onClick={() => setIsPreviewOpen(true)}
        >
          <Code2 size={20} color={snippet.iconColor} />
        </Button>
        <CopyButton
          isCopied={isCopied}
          onCopy={copyCode}
          color={snippet.iconColor}
          className="absolute top-2 right-2 z-10"
        />
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
