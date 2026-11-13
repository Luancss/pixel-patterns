import { FileCode2 } from "lucide-react";
import Image from "next/image";

import type { Language } from "@/features/code-editor/types";
import { cn } from "@/lib/utils";

export function LanguageIcon({
  language,
  className,
}: {
  language: Language;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded bg-white/5 p-0.5",
        className
      )}
    >
      {language.logoPath ? (
        <Image
          src={language.logoPath}
          alt=""
          width={20}
          height={20}
          className="size-full object-contain"
        />
      ) : (
        <FileCode2 className="size-full text-orange-400" />
      )}
    </span>
  );
}
