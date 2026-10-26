import type { ChangeEvent } from "react";
import { HexColorPicker } from "react-colorful";

import type {
  GradientStop,
  RgbaChannel,
  RgbaColor,
} from "@/app/gradient/_lib/gradient";
import { Input } from "@/components/ui/input";

import styles from "./gradient-picker.module.css";

const CHANNELS: { channel: RgbaChannel; max: number }[] = [
  { channel: "r", max: 255 },
  { channel: "g", max: 255 },
  { channel: "b", max: 255 },
  { channel: "a", max: 100 },
];

type ColorEditorProps = {
  selectedStop: GradientStop | undefined;
  hexValue: string;
  rgbValues: RgbaColor;
  onColorChange: (color: string) => void;
  onHexChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRgbChange: (channel: RgbaChannel, value: string) => void;
};

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
            {CHANNELS.map(({ channel, max }) => (
              <div key={channel} className={styles.rgbChannel}>
                <label htmlFor={`${channel}Value`}>
                  {channel.toUpperCase()}
                </label>
                <Input
                  id={`${channel}Value`}
                  type="number"
                  min="0"
                  max={max}
                  value={rgbValues[channel]}
                  onChange={(event) => onRgbChange(channel, event.target.value)}
                  className={styles.channelInput}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
