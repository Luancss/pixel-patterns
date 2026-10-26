"use client";

import { type MouseEvent, type RefObject, useRef } from "react";

import {
  type GradientStop,
  MAX_GRADIENT_STOPS,
  sortStops,
} from "@/app/gradient/_lib/gradient";
import { cn } from "@/lib/utils";

import styles from "./gradient-picker.module.css";

type BreakpointBarProps = {
  stops: GradientStop[];
  selectedStopId: string;
  draggingStopId: string | null;
  gradientCss: string;
  onStartDrag: (
    event: MouseEvent,
    id: string,
    barRef: RefObject<HTMLDivElement>
  ) => void;
  onAddStop: () => void;
};

export function BreakpointBar({
  stops,
  selectedStopId,
  draggingStopId,
  gradientCss,
  onStartDrag,
  onAddStop,
}: BreakpointBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const sortedStops = sortStops(stops);

  return (
    <>
      {stops.length < MAX_GRADIENT_STOPS && (
        <button className={styles.addStop} onClick={onAddStop}>
          + Add color
        </button>
      )}
      <div className={styles.breakpointBarContainer}>
        <div
          ref={barRef}
          className={styles.breakpointBar}
          style={{ background: gradientCss }}
        >
          {sortedStops.map((stop) => (
            <div
              key={stop.id}
              className={cn(
                styles.breakpoint,
                selectedStopId === stop.id && styles.selected,
                draggingStopId === stop.id && styles.dragging
              )}
              style={{
                left: `${stop.position}%`,
                backgroundColor: stop.color,
              }}
              onMouseDown={(event) => onStartDrag(event, stop.id, barRef)}
              title={`Position: ${stop.position}%`}
            />
          ))}
        </div>
        <div className={styles.breakpointPositions}>
          {sortedStops.map((stop) => (
            <div
              key={stop.id}
              className={styles.positionLabel}
              style={{ left: `${stop.position}%` }}
            >
              {stop.position}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
