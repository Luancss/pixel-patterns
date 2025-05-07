import styles from "./gradient.module.css";

interface GradientPreviewProps {
  gradientString: string;
}

export function GradientPreview({ gradientString }: GradientPreviewProps) {
  const gradientStyle = {
    background: gradientString,
  };

  return <div className={styles.preview} style={gradientStyle} />;
}
