"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  COLLECTION_LINKS,
  type IconNavLink,
  LIBRARY_LINKS,
  TOOL_LINKS,
} from "@/components/layout/navigation-links";
import { cn } from "@/lib/utils";

function LinkGroup({
  id,
  label,
  links,
  pathname,
}: {
  id: string;
  label: string;
  links: IconNavLink[];
  pathname: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span
        id={id}
        className="text-[11px] font-medium uppercase tracking-wider text-zinc-500"
      >
        {label}
      </span>
      <ul
        aria-labelledby={id}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {links.map(({ href, label: linkLabel, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 aria-[current=page]:border-purple-400/40 aria-[current=page]:text-white"
            >
              <Icon className="size-3.5 text-purple-400" />
              {linkLabel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site"
      className="mb-10 mt-7 flex w-[min(78rem,calc(100vw-2rem))] animate-slide-in-down flex-col items-center gap-4"
    >
      <ul className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-[0_0_40px_-12px_rgba(85,88,255,0.35)] backdrop-blur-md">
        {COLLECTION_LINKS.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block rounded-xl px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  isActive
                    ? "bg-white/10 text-white shadow-sm ring-1 ring-inset ring-white/15"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <LinkGroup
          id="navbar-library"
          label="Library"
          links={LIBRARY_LINKS}
          pathname={pathname}
        />
        <LinkGroup
          id="navbar-tools"
          label="Tools"
          links={TOOL_LINKS}
          pathname={pathname}
        />
      </div>
    </nav>
  );
}
