import styles from "./starfield.module.css";

export function Starfield() {
  return (
    <>
      <div className={styles.smallStars} />
      <div className={styles.mediumStars} />
      <div className={styles.largeStars} />
    </>
  );
}
