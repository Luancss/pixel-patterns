import { RotateCcw } from "lucide-react";

import { type GradientType, INITIAL_ANGLE } from "@/app/gradient/_lib/gradient";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

import styles from "./gradient-picker.module.css";

const GRADIENT_TYPES: { type: GradientType; label: string }[] = [
  { type: "linear", label: "Linear" },
  { type: "radial", label: "Radial" },
];

type GradientControlsProps = {
  gradientType: GradientType;
  angle: number;
  onGradientTypeChange: (type: GradientType) => void;
  onAngleChange: (angle: number) => void;
  onReset: () => void;
};

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
          {GRADIENT_TYPES.map(({ type, label }) => (
            <button
              key={type}
              className={cn(
                styles.typeButton,
                gradientType === type && styles.active
              )}
              onClick={() => onGradientTypeChange(type)}
            >
              {label}
            </button>
          ))}
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
            onValueChange={([value]) => onAngleChange(value ?? INITIAL_ANGLE)}
            className={styles.angleSlider}
          />
        </div>
      )}
    </div>
  );
}
