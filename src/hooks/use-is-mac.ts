"use client";

import { useEffect, useState } from "react";

/** Resolves after mount so server and first client render always match. */
export function useIsMac() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.userAgent));
  }, []);

  return isMac;
}
