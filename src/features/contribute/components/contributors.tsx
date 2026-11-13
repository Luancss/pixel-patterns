import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CONTRIBUTORS } from "@/features/contribute/data/contributors";

export function Contributors() {
  return (
    <div className="flex flex-row items-center justify-center mb-1 w-full">
      <AnimatedTooltip items={CONTRIBUTORS} />
    </div>
  );
}
