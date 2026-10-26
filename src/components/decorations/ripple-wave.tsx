import { cn } from "@/lib/utils";

import styles from "./ripple-wave.module.css";

const RINGS = 15;

export function RippleWave() {
  return (
    <div className={styles.container}>
      <div className={styles.surface}>
        {Array.from({ length: RINGS }, (_, index) => (
          <div
            key={index}
            className={cn(styles.ring, styles[`ring${index + 1}`])}
          />
        ))}
      </div>
    </div>
  );
}
