"use client";

import { useEffect, useRef, useState } from "react";

export type PreviewSurface = "original" | "dark" | "light" | "grid";

const SURFACE_CLASS_NAMES: Record<
  Exclude<PreviewSurface, "original">,
  string
> = {
  dark: "bg-zinc-950",
  light: "bg-zinc-50",
  grid: "pp-frame-grid",
};

const FRAME_STYLES = `
  html, body { min-height: 100%; }
  body {
    margin: 0;
    width: auto;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    align-items: safe center;
    justify-content: center;
    justify-content: safe center;
    padding: 32px;
    background-color: #000;
    overflow: auto;
  }
  body > * {
    flex-shrink: 0;
  }
  body.pp-frame-grid {
    background-color: #0b0b10;
    background-image:
      linear-gradient(45deg, #17171f 25%, transparent 25%),
      linear-gradient(-45deg, #17171f 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #17171f 75%),
      linear-gradient(-45deg, transparent 75%, #17171f 75%);
    background-size: 24px 24px;
    background-position: 0 0, 0 12px, 12px -12px, -12px 0;
  }
`;

type SnippetFrameProps = {
  markup: string;
  background: string;
  surface: PreviewSurface;
};

function applySurface(
  frame: HTMLIFrameElement | null,
  surface: PreviewSurface,
  background: string
) {
  const body = frame?.contentDocument?.body;
  if (!body) return;

  const surfaceClassName =
    surface === "original" ? background : SURFACE_CLASS_NAMES[surface];
  body.className = `${document.body.className} ${surfaceClassName}`;
}

export function SnippetFrame({
  markup,
  background,
  surface,
}: SnippetFrameProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [frameDocument, setFrameDocument] = useState<string | null>(null);

  useEffect(() => {
    const styles = [
      ...document.head.querySelectorAll('link[rel="stylesheet"], style'),
    ]
      .map((node) => node.outerHTML)
      .join("");

    setFrameDocument(
      `<!doctype html><html><head><meta charset="utf-8">${styles}<style>${FRAME_STYLES}</style></head><body>${markup}</body></html>`
    );
  }, [markup]);

  useEffect(() => {
    applySurface(frameRef.current, surface, background);
  }, [surface, background]);

  if (!frameDocument) return null;

  return (
    <iframe
      ref={frameRef}
      title="Component preview"
      sandbox="allow-same-origin"
      srcDoc={frameDocument}
      onLoad={(event) => applySurface(event.currentTarget, surface, background)}
      className="h-full w-full border-0"
    />
  );
}
