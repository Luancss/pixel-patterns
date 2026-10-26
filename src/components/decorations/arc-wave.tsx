import styles from "./arc-wave.module.css";

const ARCS = 20;

export function ArcWave() {
  return (
    <div className={styles.container}>
      {Array.from({ length: ARCS }, (_, index) => (
        <div key={index} className={styles.arc} />
      ))}
    </div>
  );
}
