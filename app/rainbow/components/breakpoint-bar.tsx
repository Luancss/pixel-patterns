import React, { useRef } from "react";
import styles from "./gradient.module.css";
import { GradientStop } from "./gradient-utils";

interface BreakpointBarProps {
  stops: GradientStop[];
  selectedStop: string;
  draggingStop: string | null;
  gradientString: string;
  onStartDrag: (
    e: React.MouseEvent,
    id: string,
    barRef: React.RefObject<HTMLDivElement>
  ) => void;
  onAddStop: () => void;
}

export function BreakpointBar({
  stops,
  selectedStop,
  draggingStop,
  gradientString,
  onStartDrag,
  onAddStop,
}: BreakpointBarProps) {
  const breakpointBarRef = useRef<HTMLDivElement>(null);
  const sortedStops = [...stops].sort((a, b) => a.position - b.position);

  return (
    <>
      {stops.length < 8 && (
        <button className={styles.addStop} onClick={onAddStop}>
          + Add color
        </button>
      )}
      <div className={styles.breakpointBarContainer}>
        <div
          ref={breakpointBarRef}
          className={styles.breakpointBar}
          style={{ background: gradientString }}
        >
          {sortedStops.map((stop) => (
            <div
              key={stop.id}
              className={`${styles.breakpoint} ${
                selectedStop === stop.id ? styles.selected : ""
              } ${draggingStop === stop.id ? styles.dragging : ""}`}
              style={{
                left: `${stop.position}%`,
                backgroundColor: stop.color,
              }}
              onMouseDown={(e) => onStartDrag(e, stop.id, breakpointBarRef)}
              title={`Position: ${stop.position}%`}
            />
          ))}
        </div>
        <div className={styles.breakpointPositions}>
          {sortedStops.map((stop) => (
            <div
              key={`pos-${stop.id}`}
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
