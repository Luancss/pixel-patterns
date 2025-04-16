"use client";

import React, { useState, useEffect } from "react";
import styles from "./gradient.module.css";
import { GradientPreview } from "./gradient-preview";
import { GradientControls } from "./gradient-controls";
import { BreakpointBar } from "./breakpoint-bar";
import { ColorEditor } from "./color-editor";
import {
  GradientStop,
  initialGradientType,
  initialAngle,
  initialStops,
  hexToRgb,
  rgbToHex,
} from "./gradient-utils";

export default function GradientPicker() {
  const [gradientType, setGradientType] = useState<"linear" | "radial">(
    initialGradientType
  );
  const [angle, setAngle] = useState(initialAngle);
  const [stops, setStops] = useState<GradientStop[]>(initialStops);
  const [selectedStop, setSelectedStop] = useState<string>("1");
  const [copied, setCopied] = useState(false);
  const [draggingStop, setDraggingStop] = useState<string | null>(null);
  const [hexValue, setHexValue] = useState("#000345");
  const [rgbValues, setRgbValues] = useState({ r: 138, g: 42, b: 155, a: 100 });

  const selectedStopData = stops.find((stop) => stop.id === selectedStop);

  useEffect(() => {
    if (selectedStopData) {
      setHexValue(selectedStopData.color);
      setRgbValues(hexToRgb(selectedStopData.color));
    }
  }, [selectedStop, selectedStopData]);

  const handleReset = () => {
    setGradientType(initialGradientType);
    setAngle(initialAngle);
    setStops([...initialStops]);
    setSelectedStop("1");
    setDraggingStop(null);
    setHexValue(initialStops[0]?.color || "#000345");
    setRgbValues(hexToRgb(initialStops[0]?.color || "#000345"));
  };

  const findPositionBoundaries = (id: string): [number, number] => {
    const sortedStops = [...stops].sort((a, b) => a.position - b.position);
    const currentIndex = sortedStops.findIndex((stop) => stop.id === id);

    if (currentIndex === -1) return [0, 100];

    let lowerBound = 0;
    let upperBound = 100;

    if (currentIndex > 0) {
      const prevStop = sortedStops[currentIndex - 1];
      if (prevStop) {
        lowerBound = prevStop.position + 1;
      }
    }

    if (currentIndex < sortedStops.length - 1) {
      const nextStop = sortedStops[currentIndex + 1];
      if (nextStop) {
        upperBound = nextStop.position - 1;
      }
    }

    return [lowerBound, upperBound];
  };

  const handleBreakpointDrag = (
    event: React.MouseEvent,
    id: string,
    barRef: React.RefObject<HTMLDivElement>
  ) => {
    if (!barRef.current) return;

    const barRect = barRef.current.getBoundingClientRect();
    const barWidth = barRect.width;
    const relativeX = event.clientX - barRect.left;

    let newPosition = Math.max(0, Math.min(100, (relativeX / barWidth) * 100));
    newPosition = Math.round(newPosition);

    updateStopPosition(id, newPosition);
  };

  const startBreakpointDrag = (
    event: React.MouseEvent,
    id: string,
    barRef: React.RefObject<HTMLDivElement>
  ) => {
    event.preventDefault();
    setSelectedStop(id);
    setDraggingStop(id);

    const handleMouseMove = (e: MouseEvent) => {
      handleBreakpointDrag(
        { clientX: e.clientX } as React.MouseEvent,
        id,
        barRef
      );
    };

    const handleMouseUp = () => {
      setDraggingStop(null);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const updateStopPosition = (id: string, newPosition: number) => {
    setDraggingStop(id);

    newPosition = Math.max(0, Math.min(100, newPosition));
    const [lowerBound, upperBound] = findPositionBoundaries(id);
    newPosition = Math.max(lowerBound, Math.min(upperBound, newPosition));

    setStops((prev) =>
      prev.map((stop) =>
        stop.id === id ? { ...stop, position: newPosition } : stop
      )
    );
  };

  const updateStopColor = (id: string, newColor: string) => {
    setStops((prev) =>
      prev.map((stop) => (stop.id === id ? { ...stop, color: newColor } : stop))
    );

    setHexValue(newColor);
    setRgbValues(hexToRgb(newColor));
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value;
    setHexValue(newHex);

    if (/^#?([0-9A-F]{3}){1,2}$/i.test(newHex)) {
      const formattedHex = newHex.startsWith("#") ? newHex : `#${newHex}`;
      if (selectedStopData) {
        updateStopColor(selectedStopData.id, formattedHex);
      }
    }
  };

  const handleRgbChange = (channel: "r" | "g" | "b" | "a", value: string) => {
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      const maxValue = channel === "a" ? 100 : 255;
      const normalizedValue = Math.max(0, Math.min(maxValue, numericValue));

      const newRgbValues = { ...rgbValues, [channel]: normalizedValue };
      setRgbValues(newRgbValues);

      if (selectedStopData && channel !== "a") {
        const newHex = rgbToHex(newRgbValues.r, newRgbValues.g, newRgbValues.b);
        updateStopColor(selectedStopData.id, newHex);
      }
    }
  };

  const addStop = () => {
    if (stops.length >= 8) return;

    const newId = (stops.length + 1).toString();
    const sortedStops = [...stops].sort((a, b) => a.position - b.position);

    let maxGap = 0;
    let gapPosition = 50;

    if (sortedStops.length >= 2) {
      for (let i = 0; i < sortedStops.length - 1; i++) {
        const currentStop = sortedStops[i];
        const nextStop = sortedStops[i + 1];

        if (currentStop && nextStop) {
          const gap = nextStop.position - currentStop.position;
          if (gap > maxGap) {
            maxGap = gap;
            gapPosition = currentStop.position + gap / 2;
          }
        }
      }
    }

    const newStop = { id: newId, color: "#000000", position: gapPosition };
    setStops([...stops, newStop]);
    setSelectedStop(newId);
    setHexValue(newStop.color);
    setRgbValues(hexToRgb(newStop.color));
  };

  const getGradientString = () => {
    const gradientStops = stops
      .sort((a, b) => a.position - b.position)
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(", ");

    return gradientType === "linear"
      ? `linear-gradient(${angle}deg, ${gradientStops})`
      : `radial-gradient(circle at center, ${gradientStops})`;
  };

  const copyToClipboard = () => {
    const gradientString = getGradientString();
    navigator.clipboard.writeText(`background: ${gradientString};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gradientString = getGradientString();

  return (
    <div className={styles.container}>
      <GradientPreview
        gradientString={gradientString}
        copied={copied}
        onCopy={copyToClipboard}
      />

      <div className={styles.cssPreview}>
        <div className={styles.cssCode}>
          <span className={styles.property}>background:</span> {gradientString};
        </div>
      </div>

      <GradientControls
        gradientType={gradientType}
        angle={angle}
        onGradientTypeChange={setGradientType}
        onAngleChange={setAngle}
        onReset={handleReset}
      />

      <BreakpointBar
        stops={stops}
        selectedStop={selectedStop}
        draggingStop={draggingStop}
        gradientString={gradientString}
        onStartDrag={startBreakpointDrag}
        onAddStop={addStop}
      />

      <ColorEditor
        selectedStop={selectedStopData}
        hexValue={hexValue}
        rgbValues={rgbValues}
        onColorChange={(color) =>
          selectedStopData && updateStopColor(selectedStopData.id, color)
        }
        onHexChange={handleHexChange}
        onRgbChange={handleRgbChange}
      />
    </div>
  );
}
