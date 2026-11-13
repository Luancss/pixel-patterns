"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";

export function notifySaved() {
  toast.success("Saved locally", {
    id: "editor-saved",
    description: "Your code is stored in this browser and restored on return.",
  });
}

/**
 * Global shortcuts, registered in the capture phase so they win over Monaco's
 * own bindings (Ctrl+Enter inserts a line there) and over the browser's
 * "Save page" dialog.
 */
export function useEditorShortcuts() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey) return;

      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        const { isRunning, runCode, cancelRun } = useCodeEditorStore.getState();
        if (isRunning) cancelRun();
        else void runCode();
      } else if (event.key.toLowerCase() === "s" && !event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();
        notifySaved();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () =>
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, []);
}
