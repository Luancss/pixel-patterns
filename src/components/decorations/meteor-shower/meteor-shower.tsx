import type { CSSProperties } from "react";

import styles from "./meteor-shower.module.css";
import { type Meteor, METEORS, STATIC_STAR_LAYERS } from "./meteors";

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
