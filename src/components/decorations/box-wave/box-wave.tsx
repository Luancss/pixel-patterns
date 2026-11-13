import type { CSSProperties } from "react";

import styles from "./box-wave.module.css";

const COLUMNS = 6;
const BOXES_PER_COLUMN = 6;
const HIGHEST_SCALE = 12;

export function BoxWave() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {Array.from({ length: COLUMNS }, (_, column) => (
          <div key={column} className={styles.column}>
            {Array.from({ length: BOXES_PER_COLUMN }, (_, row) => (
              <div
                key={row}
                className={styles.box}
                style={
                  { "--scale": HIGHEST_SCALE - column - row } as CSSProperties
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
