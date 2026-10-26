import type { CSSProperties } from "react";

import styles from "./meteor-shower.module.css";

type Meteor = {
  angle: number;
  speed: number;
  delay: number;
  x: number;
  y: number;
  travel: number;
  trail: number;
};

const STATIC_STAR_LAYERS = 35;

const METEORS: Meteor[] = [
  { angle: 92, speed: 16, delay: 16, x: 39, y: 19, travel: 33, trail: 2 },
  { angle: 79, speed: 18, delay: 6, x: 22, y: 3, travel: 35, trail: 3 },
  { angle: 93, speed: 17, delay: 6, x: 48, y: 2, travel: 14, trail: 4 },
  { angle: 86, speed: 11, delay: 19, x: 33, y: 24, travel: 25, trail: 4 },
  { angle: 53, speed: 16, delay: 14, x: 1, y: 14, travel: 11, trail: 3 },
  { angle: 91, speed: 18, delay: 23, x: 44, y: 13, travel: 13, trail: 3 },
  { angle: 91, speed: 10, delay: 6, x: 4, y: 10, travel: 21, trail: 2 },
  { angle: 53, speed: 17, delay: 20, x: 29, y: 17, travel: 19, trail: 4 },
  { angle: 77, speed: 9, delay: 20, x: 50, y: 21, travel: 44, trail: 2 },
  { angle: 59, speed: 19, delay: 2, x: 75, y: 24, travel: 28, trail: 4 },
  { angle: 85, speed: 12, delay: 24, x: 8, y: 14, travel: 44, trail: 4 },
  { angle: 90, speed: 16, delay: 6, x: 52, y: 5, travel: 13, trail: 4 },
  { angle: 89, speed: 14, delay: 8, x: 40, y: 7, travel: 35, trail: 2 },
  { angle: 60, speed: 18, delay: 4, x: 40, y: 19, travel: 24, trail: 4 },
  { angle: 46, speed: 16, delay: 18, x: 44, y: 23, travel: 31, trail: 2 },
  { angle: 72, speed: 13, delay: 9, x: 40, y: 2, travel: 28, trail: 4 },
  { angle: 67, speed: 10, delay: 11, x: 34, y: 10, travel: 14, trail: 2 },
  { angle: 91, speed: 10, delay: 19, x: 58, y: 20, travel: 35, trail: 4 },
  { angle: 55, speed: 18, delay: 7, x: 38, y: 4, travel: 29, trail: 3 },
  { angle: 66, speed: 16, delay: 10, x: 53, y: 13, travel: 31, trail: 2 },
  { angle: 94, speed: 17, delay: 24, x: 5, y: 3, travel: 35, trail: 4 },
  { angle: 60, speed: 12, delay: 9, x: 79, y: 20, travel: 38, trail: 2 },
  { angle: 87, speed: 12, delay: 15, x: 74, y: 7, travel: 15, trail: 4 },
  { angle: 58, speed: 14, delay: 8, x: 70, y: 17, travel: 33, trail: 3 },
  { angle: 83, speed: 11, delay: 20, x: 50, y: 13, travel: 46, trail: 3 },
  { angle: 61, speed: 12, delay: 20, x: 18, y: 12, travel: 20, trail: 2 },
  { angle: 53, speed: 14, delay: 9, x: 3, y: 13, travel: 30, trail: 2 },
  { angle: 79, speed: 12, delay: 14, x: 1, y: 18, travel: 32, trail: 3 },
];

function toMeteorStyle(meteor: Meteor) {
  return {
    "--angle": meteor.angle,
    "--speed": meteor.speed,
    "--delay": meteor.delay,
    "--x": meteor.x,
    "--y": meteor.y,
    "--travel": meteor.travel,
    "--trail": meteor.trail,
  } as CSSProperties;
}

export function MeteorShower() {
  return (
    <>
      {METEORS.map((meteor, index) => (
        <div
          key={index}
          className={styles.meteor}
          style={toMeteorStyle(meteor)}
        >
          <div className={styles.trail} />
        </div>
      ))}
      {Array.from({ length: STATIC_STAR_LAYERS }, (_, index) => (
        <div key={index} className={styles.staticStars} />
      ))}
    </>
  );
}
