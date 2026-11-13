import styles from "./sphere.module.css";

const MERIDIANS = 15;
const DOTS_PER_MERIDIAN = 25;

export function Sphere() {
  return (
    <div className={styles.container}>
      <div className={styles.sphere}>
        {Array.from({ length: MERIDIANS }, (_, meridian) => (
          <div key={meridian} className={styles.meridian}>
            {Array.from({ length: DOTS_PER_MERIDIAN }, (_, dot) => (
              <div key={dot} className={styles.dot} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
