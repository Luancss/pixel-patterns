import styles from "./gradient-picker.module.css";

export function GradientPreview({ gradientCss }: { gradientCss: string }) {
  return <div className={styles.preview} style={{ background: gradientCss }} />;
}
