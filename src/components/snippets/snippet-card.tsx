"use client";

import { Code2, InfoIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { type MouseEvent, useRef, useState } from "react";

import {
  getSnippetMarkup,
  SnippetPreview,
} from "@/components/snippets/snippet-preview";
import { getTilt, NO_TILT } from "@/components/snippets/tilt";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import type { Snippet, SnippetCategory } from "@/types/snippet";

const CodePreviewDialog = dynamic(() =>
  import("@/components/snippets/code-preview-dialog").then(
    (mod) => mod.CodePreviewDialog
  )
);

const CARD_SIZES = {
  compact: {
    section: "mx-auto justify-center",
    frame: "w-[300px] h-[250px]",
    hasCodePreview: true,
  },
  wide: {
    section: "mx-auto justify-items-center",
    frame: "w-[370px] h-[400px] md:w-[500px] md:h-[400px] p-4",
    hasCodePreview: false,
  },
  large: {
    section: "mx-auto",
    frame:
      "w-[350px] py-16 md:py-0 ml-auto md:w-[600px] md:h-[600px] overflow-x-scroll md:overflow-hidden",
    hasCodePreview: false,
  },
};

export type SnippetCardSize = keyof typeof CARD_SIZES;

type SnippetCardProps = {
  snippet: Snippet;
  size: SnippetCardSize;
};

function CategoryBadge({
  category,
  color,
}: {
  category: SnippetCategory;
  color: string;
}) {
  return (
    <Button
      variant="link"
      className="group absolute top-2 left-2 flex items-center"
    >
      <InfoIcon size={20} color={color} />
      <span
        className="absolute -top-3 left-1/2 transform -translate-x-1/2 p-1 z-50 rounded text-[10px] uppercase font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ color }}
      >
        {category}
      </span>
    </Button>
  );
}

export function SnippetCard({ snippet, size }: SnippetCardProps) {
  const { section, frame, hasCodePreview } = CARD_SIZES[size];
  const frameRef = useRef<HTMLDivElement>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewTilt, setPreviewTilt] = useState(NO_TILT);
  const { isCopied, copy } = useCopyToClipboard(CODE_COPY_MESSAGES);

  const copyMarkup = () => copy(getSnippetMarkup(snippet));

  const openPreview = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    const isPointerClick = event.detail > 0;

    setPreviewTilt(
      rect && isPointerClick
        ? getTilt(rect, event.clientX, event.clientY, 0.5)
        : NO_TILT
    );
    setIsPreviewOpen(true);
  };

  return (
    <section className={section}>
      <div
        ref={frameRef}
        className={cn(
          "flex flex-col items-center justify-center rounded-xl relative mr-4",
          frame,
          snippet.background
        )}
      >
        {hasCodePreview ? (
          <Button
            variant="link"
            className="absolute top-2 left-2 flex items-center"
            onClick={openPreview}
          >
            <Code2 size={20} color={snippet.iconColor} />
          </Button>
        ) : (
          <CategoryBadge
            category={snippet.category}
            color={snippet.iconColor}
          />
        )}
        <CopyButton
          isCopied={isCopied}
          onCopy={copyMarkup}
          color={snippet.iconColor}
          className="absolute top-2 right-2"
        />
        <div className="flex items-center justify-center rounded-xl">
          <SnippetPreview snippet={snippet} />
        </div>
      </div>

      {hasCodePreview && (
        <CodePreviewDialog
          snippet={snippet}
          isOpen={isPreviewOpen}
          onOpenChange={setIsPreviewOpen}
          initialTilt={previewTilt}
          isCopied={isCopied}
          onCopy={copyMarkup}
        />
      )}
    </section>
  );
}
