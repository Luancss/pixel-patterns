import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ShowcaseCardProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  children: ReactNode;
};

/** A linked overview card that previews a section of the site. */
export function ShowcaseCard({
  href,
  icon: Icon,
  title,
  description,
  cta,
  children,
}: ShowcaseCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-white/10 bg-[#0c0c12]/90 p-5 text-left shadow-2xl shadow-black/30 transition-colors hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-purple-500/10 ring-1 ring-inset ring-purple-500/20">
        <Icon className="size-4 text-purple-300" />
      </span>
      <h3 className="mt-4 font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-zinc-400">{description}</p>
      <div className="my-5 flex-1">{children}</div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
        {cta}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
