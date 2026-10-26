import styles from "./cube.module.css";

const FACES = [1, 2, 3, 4, 5, 6];

export function Cube() {
  return (
    <div className={styles.container}>
      <div className={styles.cube}>
        {FACES.map((face) => (
          <div key={face} className={styles.face}>
            {face}
          </div>
        ))}
      </div>
    </div>
  );
}
