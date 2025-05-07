import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw } from "lucide-react";
import styles from "./gradient.module.css";

interface GradientControlsProps {
  gradientType: "linear" | "radial";
  angle: number;
  onGradientTypeChange: (type: "linear" | "radial") => void;
  onAngleChange: (angle: number) => void;
  onReset: () => void;
}

export function GradientControls({
  gradientType,
  angle,
  onGradientTypeChange,
  onAngleChange,
  onReset,
}: GradientControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.typeControls}>
        <div className={styles.typeButtons}>
          <button
            className={`${styles.typeButton} ${
              gradientType === "linear" ? styles.active : ""
            }`}
            onClick={() => onGradientTypeChange("linear")}
          >
            Linear
          </button>
          <button
            className={`${styles.typeButton} ${
              gradientType === "radial" ? styles.active : ""
            }`}
            onClick={() => onGradientTypeChange("radial")}
          >
            Radial
          </button>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className={styles.resetButton}
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
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
            onValueChange={(value) => onAngleChange(value[0] || 90)}
            className={styles.angleSlider}
          />
        </div>
      )}
    </div>
  );
}
