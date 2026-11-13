"use client";

import { ArrowRight } from "lucide-react";
import { type MouseEvent, useEffect, useRef, useState } from "react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

type Corner = "topLeft" | "topRight" | "bottomRight" | "bottomLeft";

type CornerRadii = Record<Corner, number>;

const SHAPE_SIZE = 400;
const MAX_RADIUS = 200;
const DRAG_SENSITIVITY = 300;

const INITIAL_RADII: CornerRadii = {
  topLeft: 50,
  topRight: 50,
  bottomRight: 50,
  bottomLeft: 50,
};

const CORNER_SLIDERS: { corner: Corner; label: string }[] = [
  { corner: "topLeft", label: "Top Left" },
  { corner: "topRight", label: "Top Right" },
  { corner: "bottomLeft", label: "Bottom Left" },
  { corner: "bottomRight", label: "Bottom Right" },
];

const SLIDER_CLASS_NAME =
  "w-full appearance-none h-2 bg-gray-600 rounded-lg outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg";

function clampRadius(value: number) {
  return Math.max(0, Math.min(MAX_RADIUS, value));
}

function getClosestCorner(rect: DOMRect, clientX: number, clientY: number) {
  const isTop = clientY - rect.top < rect.height / 2;
  const isLeft = clientX - rect.left < rect.width / 2;

  if (isTop) return isLeft ? "topLeft" : "topRight";
  return isLeft ? "bottomLeft" : "bottomRight";
}

function getCornerPoint(rect: DOMRect, corner: Corner) {
  return {
    x: corner === "topLeft" || corner === "bottomLeft" ? rect.left : rect.right,
    y: corner === "topLeft" || corner === "topRight" ? rect.top : rect.bottom,
  };
}

function formatRadii(radii: CornerRadii) {
  return [radii.topLeft, radii.topRight, radii.bottomRight, radii.bottomLeft]
    .map((radius) => `${Math.round(radius)}%`)
    .join(" ");
}

export function BorderRadiusEditor() {
  const [radii, setRadii] = useState(INITIAL_RADII);
  const [draggingCorner, setDraggingCorner] = useState<Corner | null>(null);
  const [hoverCorner, setHoverCorner] = useState<Corner | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const shapeRef = useRef<HTMLDivElement>(null);
  const { copy } = useCopyToClipboard({ success: "Copied to clipboard!" });

  const radiiText = formatRadii(radii);

  const setRadius = (corner: Corner, value: number) => {
    setRadii((previous) => ({ ...previous, [corner]: clampRadius(value) }));
  };

  useEffect(() => {
    if (!draggingCorner) return;

    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const rect = shapeRef.current?.getBoundingClientRect();
      if (!rect) return;

      const point = getCornerPoint(rect, draggingCorner);
      const distance = Math.hypot(
        event.clientX - point.x,
        event.clientY - point.y
      );
      const diagonal = Math.hypot(rect.width, rect.height);

      setRadii((previous) => ({
        ...previous,
        [draggingCorner]: clampRadius((distance / diagonal) * DRAG_SENSITIVITY),
      }));
    };

    const handleMouseUp = () => setDraggingCorner(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingCorner]);

  const handleShapeMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    const rect = shapeRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDraggingCorner(getClosestCorner(rect, event.clientX, event.clientY));
    event.preventDefault();
  };

  const handleShapeMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = shapeRef.current?.getBoundingClientRect();
    if (!rect) return;

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setHoverCorner(getClosestCorner(rect, event.clientX, event.clientY));
  };

  const handleShapeMouseLeave = () => {
    if (!draggingCorner) setHoverCorner(null);
  };

  return (
    <div className="absolute -bottom-12 right-4 overflow-hidden min-h-screen flex flex-col items-center justify-center z-50 -mt-20">
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        <div className="relative">
          <div
            ref={shapeRef}
            className="cursor-pointer"
            style={{
              width: `${SHAPE_SIZE}px`,
              height: `${SHAPE_SIZE}px`,
              background: "linear-gradient(45deg, #0dcaf0, #60a5fa, #ffffff)",
              borderRadius: `${radii.topLeft}% ${radii.topRight}% ${radii.bottomRight}% ${radii.bottomLeft}%`,
              position: "relative",
            }}
            onMouseDown={handleShapeMouseDown}
            onMouseMove={handleShapeMouseMove}
            onMouseLeave={handleShapeMouseLeave}
          />

          <div
            className="absolute border border-dashed border-white pointer-events-none"
            style={{
              width: `${SHAPE_SIZE}px`,
              height: `${SHAPE_SIZE}px`,
              top: 0,
              left: 0,
            }}
          />

          <div
            className="absolute text-white text-xs font-mono rounded-md animate-fade-in font-medium flex gap-1"
            style={{
              top: "-20px",
              left: "0",
            }}
          >
            {SHAPE_SIZE}px
            <ArrowRight className="size-4" />
          </div>
          <div
            className="absolute text-white text-xs font-mono rounded-md animate-fade-in font-medium flex items-center justify-center gap-1"
            style={{
              bottom: "0",
              left: "-12px",
              transform: "rotate(270deg)",
              transformOrigin: "left center",
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            {SHAPE_SIZE}px
            <ArrowRight className="size-4" />
          </div>

          {hoverCorner && (
            <div
              className="absolute bg-black/80 text-white px-2 py-1 rounded text-sm font-mono pointer-events-none transform -translate-x-1/2 -translate-y-full animate-fade-in"
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y - 10}px`,
              }}
            >
              {Math.round(radii[hoverCorner])}%
            </div>
          )}
        </div>
      </div>

      <div className="bg-black p-6 rounded-lg shadow-xl flex flex-col gap-4 w-[500px]">
        <div className="flex items-center justify-between">
          <div className="text-white flex items-center font-medium">
            border-radius:
          </div>
          <div className="flex-1 mx-4 bg-gray-700 px-4 py-2 rounded-md text-white font-mono">
            {radiiText}
          </div>
          <button
            type="button"
            onClick={() => copy(`border-radius: ${radiiText};`)}
            className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-md hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 uppercase font-bold shadow-lg"
          >
            Copy
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {CORNER_SLIDERS.map(({ corner, label }) => (
            <div key={corner} className="bg-gray-700/50 p-4 rounded-lg">
              <label className="text-white mb-2 font-medium flex justify-between">
                <span>{label}</span>
                <span className="text-cyan-400">
                  {Math.round(radii[corner])}%
                </span>
              </label>
              <input
                title={label}
                type="range"
                min="0"
                max={MAX_RADIUS}
                value={radii[corner]}
                onChange={(event) =>
                  setRadius(corner, Number(event.target.value))
                }
                className={SLIDER_CLASS_NAME}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
