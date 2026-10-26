import styles from "./ring-wave.module.css";

const RINGS = 18;

export function RingWave() {
  return (
    <div className={styles.container}>
      {Array.from({ length: RINGS }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}
