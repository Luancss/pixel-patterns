"use client";

import { Check, Copy } from "lucide-react";
import {
  type ChangeEvent,
  type MouseEvent,
  type RefObject,
  useEffect,
  useState,
} from "react";

import { BreakpointBar } from "@/app/gradient/_components/breakpoint-bar";
import { ColorEditor } from "@/app/gradient/_components/color-editor";
import { GradientControls } from "@/app/gradient/_components/gradient-controls";
import { GradientPreview } from "@/app/gradient/_components/gradient-preview";
import {
  type GradientStop,
  hexToRgb,
  INITIAL_ANGLE,
  INITIAL_GRADIENT_TYPE,
  INITIAL_STOPS,
  MAX_GRADIENT_STOPS,
  type RgbaChannel,
  rgbToHex,
  sortStops,
  toGradientCss,
} from "@/app/gradient/_lib/gradient";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

import styles from "./gradient-picker.module.css";

const INITIAL_STOP_ID = "1";
const INITIAL_COLOR = INITIAL_STOPS[0]?.color ?? "#000345";
const HEX_PATTERN = /^#?([0-9A-F]{3}){1,2}$/i;

function getPositionBounds(stops: GradientStop[], id: string) {
  const sortedStops = sortStops(stops);
  const index = sortedStops.findIndex((stop) => stop.id === id);
  if (index === -1) return [0, 100] as const;

  const previous = sortedStops[index - 1];
  const next = sortedStops[index + 1];

  return [
    previous ? previous.position + 1 : 0,
    next ? next.position - 1 : 100,
  ] as const;
}

function getLargestGapCenter(stops: GradientStop[]) {
  const sortedStops = sortStops(stops);
  let largestGap = 0;
  let center = 50;

  for (let index = 0; index < sortedStops.length - 1; index++) {
    const current = sortedStops[index];
    const next = sortedStops[index + 1];
    if (!current || !next) continue;

    const gap = next.position - current.position;
    if (gap > largestGap) {
      largestGap = gap;
      center = current.position + gap / 2;
    }
  }

  return center;
}

export function GradientPicker() {
  const [gradientType, setGradientType] = useState(INITIAL_GRADIENT_TYPE);
  const [angle, setAngle] = useState(INITIAL_ANGLE);
  const [stops, setStops] = useState(INITIAL_STOPS);
  const [selectedStopId, setSelectedStopId] = useState(INITIAL_STOP_ID);
  const [draggingStopId, setDraggingStopId] = useState<string | null>(null);
  const [hexValue, setHexValue] = useState(INITIAL_COLOR);
  const [rgbValues, setRgbValues] = useState(() => hexToRgb(INITIAL_COLOR));
  const { isCopied, copy } = useCopyToClipboard({
    success: "Gradient copied to clipboard",
  });

  const selectedStop = stops.find((stop) => stop.id === selectedStopId);
  const gradientCss = toGradientCss(gradientType, angle, stops);

  useEffect(() => {
    if (!selectedStop) return;

    setHexValue(selectedStop.color);
    setRgbValues(hexToRgb(selectedStop.color));
  }, [selectedStop]);

  const resetGradient = () => {
    setGradientType(INITIAL_GRADIENT_TYPE);
    setAngle(INITIAL_ANGLE);
    setStops([...INITIAL_STOPS]);
    setSelectedStopId(INITIAL_STOP_ID);
    setDraggingStopId(null);
    setHexValue(INITIAL_COLOR);
    setRgbValues(hexToRgb(INITIAL_COLOR));
  };

  const updateStopColor = (id: string, color: string) => {
    setStops((previous) =>
      previous.map((stop) => (stop.id === id ? { ...stop, color } : stop))
    );
    setHexValue(color);
    setRgbValues(hexToRgb(color));
  };

  const startStopDrag = (
    event: MouseEvent,
    id: string,
    barRef: RefObject<HTMLDivElement>
  ) => {
    event.preventDefault();
    setSelectedStopId(id);
    setDraggingStopId(id);

    const [lowerBound, upperBound] = getPositionBounds(stops, id);

    const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
      const bar = barRef.current?.getBoundingClientRect();
      if (!bar) return;

      const pointerPosition = Math.round(
        Math.max(
          0,
          Math.min(100, ((moveEvent.clientX - bar.left) / bar.width) * 100)
        )
      );
      const position = Math.max(
        lowerBound,
        Math.min(upperBound, pointerPosition)
      );

      setStops((previous) =>
        previous.map((stop) => (stop.id === id ? { ...stop, position } : stop))
      );
    };

    const handleMouseUp = () => {
      setDraggingStopId(null);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleHexChange = (event: ChangeEvent<HTMLInputElement>) => {
    const hex = event.target.value;
    setHexValue(hex);

    if (selectedStop && HEX_PATTERN.test(hex)) {
      updateStopColor(selectedStop.id, hex.startsWith("#") ? hex : `#${hex}`);
    }
  };

  const handleRgbChange = (channel: RgbaChannel, value: string) => {
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) return;

    const maxValue = channel === "a" ? 100 : 255;
    const nextRgbValues = {
      ...rgbValues,
      [channel]: Math.max(0, Math.min(maxValue, numericValue)),
    };
    setRgbValues(nextRgbValues);

    if (selectedStop && channel !== "a") {
      updateStopColor(
        selectedStop.id,
        rgbToHex(nextRgbValues.r, nextRgbValues.g, nextRgbValues.b)
      );
    }
  };

  const addStop = () => {
    if (stops.length >= MAX_GRADIENT_STOPS) return;

    const newStop: GradientStop = {
      id: (stops.length + 1).toString(),
      color: "#000000",
      position: getLargestGapCenter(stops),
    };

    setStops([...stops, newStop]);
    setSelectedStopId(newStop.id);
    setHexValue(newStop.color);
    setRgbValues(hexToRgb(newStop.color));
  };

  return (
    <div className={styles.container}>
      <GradientPreview gradientCss={gradientCss} />

      <div className={styles.cssPreview}>
        <div className={styles.copyButtonContainer}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copy(`background: ${gradientCss};`)}
            className={styles.copyButton}
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className={styles.cssCode}>
          <span className={styles.property}>background:</span> {gradientCss};
        </div>
      </div>

      <GradientControls
        gradientType={gradientType}
        angle={angle}
        onGradientTypeChange={setGradientType}
        onAngleChange={setAngle}
        onReset={resetGradient}
      />

      <BreakpointBar
        stops={stops}
        selectedStopId={selectedStopId}
        draggingStopId={draggingStopId}
        gradientCss={gradientCss}
        onStartDrag={startStopDrag}
        onAddStop={addStop}
      />

      <ColorEditor
        selectedStop={selectedStop}
        hexValue={hexValue}
        rgbValues={rgbValues}
        onColorChange={(color) =>
          selectedStop && updateStopColor(selectedStop.id, color)
        }
        onHexChange={handleHexChange}
        onRgbChange={handleRgbChange}
      />
    </div>
  );
}
