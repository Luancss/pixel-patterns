"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "All" },
  { href: "/buttons", label: "Buttons" },
  { href: "/inputs", label: "Inputs" },
  { href: "/loaders", label: "Loaders" },
  { href: "/cards", label: "Cards" },
  { href: "/checkboxes", label: "Checkboxes" },
  { href: "/forms", label: "Forms" },
  { href: "/navigation", label: "Navigation" },
  { href: "/feedback", label: "Feedback" },
  { href: "/overlays", label: "Overlays" },
  { href: "/data-display", label: "Data Display" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex w-[min(60rem,calc(100vw-2rem))] flex-wrap gap-3 sm:gap-4 mt-7 mb-10 animate-slide-in-down items-center justify-center">
      {NAV_ITEMS.map(({ href, label }) => (
        <Button
          key={href}
          asChild
          className={cn(
            "border border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
            pathname === href && "border-[#fff]"
          )}
        >
          <Link href={href}>{label}</Link>
        </Button>
      ))}
    </div>
  );
}
