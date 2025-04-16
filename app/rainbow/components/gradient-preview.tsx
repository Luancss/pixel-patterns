import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import styles from "./gradient.module.css";
import { GradientStop } from "./gradient-utils";

interface GradientPreviewProps {
  gradientString: string;
  copied: boolean;
  onCopy: () => void;
}

export function GradientPreview({
  gradientString,
  copied,
  onCopy,
}: GradientPreviewProps) {
  const gradientStyle = {
    background: gradientString,
  };

  return (
    <div className={styles.preview} style={gradientStyle}>
      <div className={styles.copyButtonContainer}>
        <Button
          variant="ghost"
          size="sm"
          onClick={onCopy}
          className={styles.copyButton}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copy CSS
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
