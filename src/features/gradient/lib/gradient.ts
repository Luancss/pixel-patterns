import { hexToRgb } from "@/lib/color";

export type GradientType = "linear" | "radial";

export type GradientStop = {
  id: string;
  color: string;
  position: number;
};

export type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type RgbaChannel = keyof RgbaColor;

export const MAX_GRADIENT_STOPS = 8;

export const INITIAL_GRADIENT_TYPE: GradientType = "linear";

export const INITIAL_ANGLE = 90;

export const INITIAL_STOPS: GradientStop[] = [
  { id: "1", color: "#000345", position: 0 },
  { id: "2", color: "#007fc9", position: 33 },
  { id: "3", color: "#000000", position: 100 },
];

export function hexToRgba(hex: string): RgbaColor {
  return { ...hexToRgb(hex), a: 100 };
}

export function sortStops(stops: GradientStop[]) {
  return [...stops].sort((a, b) => a.position - b.position);
}

export function toGradientCss(
  type: GradientType,
  angle: number,
  stops: GradientStop[]
) {
  const colorStops = sortStops(stops)
    .map((stop) => `${stop.color} ${stop.position}%`)
    .join(", ");

  return type === "linear"
    ? `linear-gradient(${angle}deg, ${colorStops})`
    : `radial-gradient(circle at center, ${colorStops})`;
}
