export type Tilt = {
  rotateX: number;
  rotateY: number;
};

export const NO_TILT: Tilt = { rotateX: 0, rotateY: 0 };

const MAX_TILT_DEG = 10;

export function getTilt(
  rect: DOMRect,
  clientX: number,
  clientY: number,
  reach: number
): Tilt {
  const offsetX =
    (clientX - (rect.left + rect.width / 2)) / (rect.width * reach);
  const offsetY =
    (clientY - (rect.top + rect.height / 2)) / (rect.height * reach);

  return { rotateX: offsetY * -MAX_TILT_DEG, rotateY: offsetX * MAX_TILT_DEG };
}
