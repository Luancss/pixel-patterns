import { Check, CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  isCopied: boolean;
  onCopy: () => void;
  color: string;
  className?: string;
};

export function CopyButton({
  isCopied,
  onCopy,
  color,
  className,
}: CopyButtonProps) {
  const Icon = isCopied ? Check : CopyIcon;

  return (
    <Button onClick={onCopy} variant="link" className={className}>
      <Icon size={20} color={color} />
    </Button>
  );
}
