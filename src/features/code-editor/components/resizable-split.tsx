"use client";

import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const KEYBOARD_STEP = 0.02;

type ResizableSplitProps = {
  start: ReactNode;
  end: ReactNode;
  storageKey: string;
  defaultRatio?: number;
  minRatio?: number;
  maxRatio?: number;
  className?: string;
};

/**
 * Side-by-side panels with a draggable, keyboard-accessible divider on large
 * screens. Below `lg` the panels stack and the divider is hidden.
 */
export function ResizableSplit({
  start,
  end,
  storageKey,
  defaultRatio = 0.56,
  minRatio = 0.3,
  maxRatio = 0.75,
  className,
}: ResizableSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(defaultRatio);
  const [isDragging, setIsDragging] = useState(false);

  const clamp = (value: number) =>
    Math.min(Math.max(value, minRatio), maxRatio);

  const commit = (value: number) => {
    const next = clamp(value);
    setRatio(next);
    try {
      localStorage.setItem(storageKey, next.toFixed(3));
    } catch {
      // Not persisting the layout is harmless.
    }
  };

  useEffect(() => {
    try {
      const stored = Number(localStorage.getItem(storageKey));
      if (stored) setRatio(Math.min(Math.max(stored, minRatio), maxRatio));
    } catch {
      // Keep the default ratio.
    }
  }, [storageKey, minRatio, maxRatio]);

  const ratioFromPointer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    return rect ? (clientX - rect.left) / rect.width : ratio;
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging) setRatio(clamp(ratioFromPointer(event.clientX)));
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    commit(ratioFromPointer(event.clientX));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const next = {
      ArrowLeft: ratio - KEYBOARD_STEP,
      ArrowRight: ratio + KEYBOARD_STEP,
      Home: minRatio,
      End: maxRatio,
    }[event.key];
    if (next === undefined) return;

    event.preventDefault();
    commit(next);
  };

  return (
    <div
      ref={containerRef}
      style={{ "--split": `${ratio * 100}%` } as CSSProperties}
      className={cn(
        "flex min-h-0 flex-col gap-3 lg:flex-row lg:gap-0",
        isDragging &&
          "cursor-col-resize select-none [&_iframe]:pointer-events-none",
        className
      )}
    >
      <div className="flex min-h-0 min-w-0 flex-col lg:w-[var(--split)] lg:shrink-0">
        {start}
      </div>
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize editor and output panels"
        aria-valuemin={Math.round(minRatio * 100)}
        aria-valuemax={Math.round(maxRatio * 100)}
        aria-valuenow={Math.round(ratio * 100)}
        tabIndex={0}
        title="Drag to resize · double-click to reset"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        onDoubleClick={() => commit(defaultRatio)}
        className="group hidden w-3 shrink-0 cursor-col-resize touch-none items-center justify-center focus-visible:outline-none lg:flex"
      >
        <span
          className={cn(
            "h-12 w-1 rounded-full bg-white/10 transition-colors group-hover:bg-blue-500/60 group-focus-visible:bg-blue-500",
            isDragging && "bg-blue-500"
          )}
        />
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">{end}</div>
    </div>
  );
}
