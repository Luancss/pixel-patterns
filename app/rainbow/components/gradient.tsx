"use client";

import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import styles from "./gradient.module.css";

interface GradientStop {
  id: string;
  color: string;
  position: number;
}

export default function GradientPicker() {
  const [gradientType, setGradientType] = useState<"linear" | "radial">(
    "linear"
  );
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState<GradientStop[]>([
    { id: "1", color: "#8A2A9B", position: 0 },
    { id: "2", color: "#57C785", position: 33 },
    { id: "3", color: "#1A1111", position: 100 },
  ]);
  const [selectedStop, setSelectedStop] = useState<string>("1");
  const [copied, setCopied] = useState(false);

  const selectedStopData = stops.find((stop) => stop.id === selectedStop);

  const updateStopPosition = (id: string, newPosition: number) => {
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
  };

  const addStop = () => {
    const newId = (stops.length + 1).toString();
    const lastStop = stops[stops.length - 1];
    const newPosition = lastStop ? (lastStop.position + 100) / 2 : 50;

    setStops([
      ...stops,
      { id: newId, color: "#000000", position: newPosition },
    ]);
    setSelectedStop(newId);
  };

  const removeStop = (id: string) => {
    if (stops.length <= 2) return;
    setStops((prev) => prev.filter((stop) => stop.id !== id));
    if (selectedStop === id) {
      setSelectedStop(stops[0]?.id || "1");
    }
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

  const gradientStyle = {
    background: getGradientString(),
  };

  return (
    <div className={styles.container}>
      <div className={styles.preview} style={gradientStyle}>
        <div className={styles.copyButtonContainer}>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className={styles.copyButton}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy CSS
              </>
            )}
          </Button>
        </div>
      </div>

      <div className={styles.cssPreview}>
        <div className={styles.cssCode}>
          <span className={styles.property}>background:</span>{" "}
          {getGradientString()};
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.typeControls}>
          <button
            className={`${styles.typeButton} ${
              gradientType === "linear" ? styles.active : ""
            }`}
            onClick={() => setGradientType("linear")}
          >
            Linear
          </button>
          <button
            className={`${styles.typeButton} ${
              gradientType === "radial" ? styles.active : ""
            }`}
            onClick={() => setGradientType("radial")}
          >
            Radial
          </button>
        </div>

        {gradientType === "linear" && (
          <div className={styles.angleControl}>
            <label htmlFor="angle">Angle: {angle}°</label>
            <Slider
              id="angle"
              min={0}
              max={360}
              step={1}
              value={[angle]}
              onValueChange={(value) => setAngle(value[0] || 90)}
              className={styles.angleSlider}
            />
          </div>
        )}

        <div className={styles.stopsContainer}>
          {stops.map((stop) => (
            <div
              key={stop.id}
              className={`${styles.stop} ${
                selectedStop === stop.id ? styles.selected : ""
              }`}
              onClick={() => setSelectedStop(stop.id)}
            >
              <div
                className={styles.colorPreview}
                style={{ backgroundColor: stop.color }}
              />
              <div className={styles.positionControl}>
                <label htmlFor={`position-${stop.id}`}>
                  Position: {stop.position}%
                </label>
                <Slider
                  id={`position-${stop.id}`}
                  min={0}
                  max={100}
                  step={1}
                  value={[stop.position]}
                  onValueChange={(value) =>
                    updateStopPosition(stop.id, value[0] || 0)
                  }
                  className={styles.positionSlider}
                />
              </div>
              <button
                className={styles.removeStop}
                onClick={(e) => {
                  e.stopPropagation();
                  removeStop(stop.id);
                }}
              >
                ×
              </button>
            </div>
          ))}
          <button className={styles.addStop} onClick={addStop}>
            + Add color
          </button>
        </div>

        {selectedStopData && (
          <div className={styles.colorPicker}>
            <HexColorPicker
              color={selectedStopData.color}
              onChange={(color) => updateStopColor(selectedStopData.id, color)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
