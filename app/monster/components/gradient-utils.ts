// Função para converter cor hex para RGB
export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number; a: number } => {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    const [c1, c2, c3] = hex.split("");
    if (c1 && c2 && c3) {
      hex = c1 + c1 + c2 + c2 + c3 + c3;
    }
  }

  let r = 0,
    g = 0,
    b = 0;
  try {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } catch (e) {}

  return {
    r: isNaN(r) ? 0 : r,
    g: isNaN(g) ? 0 : g,
    b: isNaN(b) ? 0 : b,
    a: 100,
  };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.max(0, Math.min(255, x)).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

export const initialGradientType = "linear";
export const initialAngle = 90;
export const initialStops = [
  { id: "1", color: "#000345", position: 0 },
  { id: "2", color: "#007fc9", position: 33 },
  { id: "3", color: "#000000", position: 100 },
];

export interface GradientStop {
  id: string;
  color: string;
  position: number;
}
