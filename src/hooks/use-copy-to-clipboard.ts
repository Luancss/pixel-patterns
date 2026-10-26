"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const COPIED_STATE_DURATION_MS = 2000;

type CopyMessages = {
  success?: string;
  error?: string;
};

export const CODE_COPY_MESSAGES: CopyMessages = {
  success: "Code copied!",
  error: "Failed to copy!",
};

export function useCopyToClipboard(messages: CopyMessages = {}) {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>();
  const { success, error } = messages;

  useEffect(() => () => clearTimeout(resetTimeout.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        if (error) toast.error(error);
        return false;
      }

      setIsCopied(true);
      if (success) toast.success(success);

      clearTimeout(resetTimeout.current);
      resetTimeout.current = setTimeout(
        () => setIsCopied(false),
        COPIED_STATE_DURATION_MS
      );
      return true;
    },
    [success, error]
  );

  return { isCopied, copy };
}
