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

export function hexToRgb(hex: string): RgbaColor {
  let digits = hex.replace("#", "");

  if (digits.length === 3) {
    digits = digits
      .split("")
      .map((digit) => digit + digit)
      .join("");
  }

  const channel = (start: number) => {
    const value = parseInt(digits.substring(start, start + 2), 16);
    return isNaN(value) ? 0 : value;
  };

  return { r: channel(0), g: channel(2), b: channel(4), a: 100 };
}

export function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((value) =>
        Math.max(0, Math.min(255, value)).toString(16).padStart(2, "0")
      )
      .join("")
  );
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
