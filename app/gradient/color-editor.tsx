import React from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import styles from "./gradient.module.css";
import { GradientStop } from "./gradient-utils";

interface ColorEditorProps {
  selectedStop: GradientStop | undefined;
  hexValue: string;
  rgbValues: { r: number; g: number; b: number; a: number };
  onColorChange: (color: string) => void;
  onHexChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRgbChange: (channel: "r" | "g" | "b" | "a", value: string) => void;
}

export function ColorEditor({
  selectedStop,
  hexValue,
  rgbValues,
  onColorChange,
  onHexChange,
  onRgbChange,
}: ColorEditorProps) {
  if (!selectedStop) return null;

  return (
    <div className={styles.colorEditor}>
      <div className={styles.colorPickerContainer}>
        <HexColorPicker color={selectedStop.color} onChange={onColorChange} />
      </div>

      <div className={styles.colorInputs}>
        <div className={styles.hexInput}>
          <label htmlFor="hexColor">HEX</label>
          <Input
            id="hexColor"
            value={hexValue}
            onChange={onHexChange}
            className={styles.colorInput}
          />
        </div>

        <div className={styles.rgbInputs}>
          <div className={styles.rgbChannels}>
            <div className={styles.rgbChannel}>
              <label htmlFor="rValue">R</label>
              <Input
                id="rValue"
                type="number"
                min="0"
                max="255"
                value={rgbValues.r}
                onChange={(e) => onRgbChange("r", e.target.value)}
                className={styles.channelInput}
              />
            </div>
            <div className={styles.rgbChannel}>
              <label htmlFor="gValue">G</label>
              <Input
                id="gValue"
                type="number"
                min="0"
                max="255"
                value={rgbValues.g}
                onChange={(e) => onRgbChange("g", e.target.value)}
                className={styles.channelInput}
              />
            </div>
            <div className={styles.rgbChannel}>
              <label htmlFor="bValue">B</label>
              <Input
                id="bValue"
                type="number"
                min="0"
                max="255"
                value={rgbValues.b}
                onChange={(e) => onRgbChange("b", e.target.value)}
                className={styles.channelInput}
              />
            </div>
            <div className={styles.rgbChannel}>
              <label htmlFor="aValue">A</label>
              <Input
                id="aValue"
                type="number"
                min="0"
                max="100"
                value={rgbValues.a}
                onChange={(e) => onRgbChange("a", e.target.value)}
                className={styles.channelInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
