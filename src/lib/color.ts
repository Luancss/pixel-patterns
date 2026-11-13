export type ContrastLevel = "AAA" | "AA" | "AA Large" | "Fail";

function toLinear(channel: number) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

export type RgbColor = { r: number; g: number; b: number };

/** Parses `#rgb` or `#rrggbb`; invalid channels resolve to 0. */
export function hexToRgb(hex: string): RgbColor {
  const digits = hex.replace("#", "");
  const full =
    digits.length === 3
      ? digits
          .split("")
          .map((digit) => digit + digit)
          .join("")
      : digits;
  const channel = (start: number) => {
    const value = Number.parseInt(full.substring(start, start + 2), 16);
    return Number.isNaN(value) ? 0 : value;
  };
  return { r: channel(0), g: channel(2), b: channel(4) };
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

/** WCAG 2.x relative luminance. */
export function relativeLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

export function contrastRatio(foreground: string, background: string) {
  const [lighter, darker] = [
    relativeLuminance(foreground),
    relativeLuminance(background),
  ].sort((first, second) => second - first) as [number, number];
  return (lighter + 0.05) / (darker + 0.05);
}

export function getContrastLevel(ratio: number): ContrastLevel {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA Large";
  return "Fail";
}

/** Black or white, whichever reads better on the given color. */
export function getReadableTextColor(background: string) {
  return contrastRatio("#000000", background) >=
    contrastRatio("#ffffff", background)
    ? "#000000"
    : "#ffffff";
}
