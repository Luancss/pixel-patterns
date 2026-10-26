"use client";

import { CodeBlock } from "@react-email/code-block";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { type RefObject, useEffect, useMemo, useRef, useState } from "react";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { SiteBackground } from "@/components/layout/site-background";
import { HighlightThemePicker } from "@/components/snippets/highlight-theme-picker";
import { useHighlightThemeStore } from "@/components/snippets/highlight-theme-store";
import { getHighlightTheme } from "@/components/snippets/highlight-themes";
import { getSnippetMarkup } from "@/components/snippets/snippet-preview";
import { getTilt, NO_TILT, type Tilt } from "@/components/snippets/tilt";
import { CopyButton } from "@/components/ui/copy-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Snippet } from "@/types/snippet";

const TILT_BOUNDARY = { x: 150, y: 50 };

const CODE_BLOCK_STYLE = {
  margin: "0",
  borderRadius: "0",
  padding: "1rem",
  borderLeft: "3px solid #1F1F1F",
  zIndex: "50",
};

const WINDOW_CONTROL_COLORS = ["bg-[#FF5F56]", "bg-[#FFBD2E]", "bg-[#27C93F]"];

type CodePreviewDialogProps = {
  snippet: Snippet;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  initialTilt: Tilt;
  isCopied: boolean;
  onCopy: () => void;
};

function useDialogTilt(
  dialogRef: RefObject<HTMLElement>,
  isOpen: boolean,
  initialTilt: Tilt
) {
  const [tilt, setTilt] = useState(initialTilt);
  const [isPointerNearby, setIsPointerNearby] = useState(true);
  const [wasOpen, setWasOpen] = useState(isOpen);

  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (isOpen) {
      setTilt(initialTilt);
      setIsPointerNearby(true);
    }
  }

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerMove = (event: MouseEvent) => {
      const rect = dialogRef.current?.getBoundingClientRect();
      if (!rect) return;

      const isNearby =
        event.clientX >= rect.left - TILT_BOUNDARY.x &&
        event.clientX <= rect.right + TILT_BOUNDARY.x &&
        event.clientY >= rect.top - TILT_BOUNDARY.y &&
        event.clientY <= rect.bottom + TILT_BOUNDARY.y;

      setIsPointerNearby(isNearby);
      setTilt(
        isNearby ? getTilt(rect, event.clientX, event.clientY, 1) : NO_TILT
      );
    };

    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [dialogRef, isOpen]);

  return { tilt, isPointerNearby };
}

function SnippetCode({ snippet }: { snippet: Snippet }) {
  const themeName = useHighlightThemeStore((state) => state.themeName);
  const markup = useMemo(() => getSnippetMarkup(snippet), [snippet]);

  return (
    <CodeBlock
      code={markup}
      lineNumbers
      style={CODE_BLOCK_STYLE}
      theme={getHighlightTheme(themeName)}
      language="javascript"
    />
  );
}

export function CodePreviewDialog({
  snippet,
  isOpen,
  onOpenChange,
  initialTilt,
  isCopied,
  onCopy,
}: CodePreviewDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { tilt, isPointerNearby } = useDialogTilt(
    dialogRef,
    isOpen,
    initialTilt
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        ref={dialogRef}
        className="flex flex-col justify-center max-w-[850px] max-h-[650px] h-full w-full bg-black overflow-hidden text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `perspective(2000px) translate(-50%, -50%) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          top: "50%",
          left: "50%",
          transition: isPointerNearby ? "none" : "transform 0.5s ease-out",
        }}
      >
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <Starfield />
        <MeteorShower />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col mx-auto rounded-xl overflow-hidden w-[700px] max-h-[650px] -mt-8 mb-6"
        >
          <SiteBackground />
          <DialogHeader className="text-white mx-auto mb-5 z-50 flex w-full flex-row items-center">
            <DialogTitle className="text-2xl flex items-center">
              Code Preview
              <CopyButton
                isCopied={isCopied}
                onCopy={onCopy}
                color={snippet.iconColor}
              />
            </DialogTitle>
            <HighlightThemePicker />
          </DialogHeader>
          <div className="flex gap-2 items-center bg-[#1F1F1F] px-4 py-2 rounded-t-xl z-50">
            {WINDOW_CONTROL_COLORS.map((color) => (
              <div key={color} className={`w-3 h-3 rounded-full ${color}`} />
            ))}
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="w-full h-full overflow-y-auto custom-scrollbar mx-auto z-50"
          >
            <SnippetCode snippet={snippet} />
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
