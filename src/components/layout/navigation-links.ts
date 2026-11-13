import {
  Blend,
  BookOpen,
  Code2,
  type LucideIcon,
  Palette,
  Squircle,
} from "lucide-react";

import { SNIPPET_COLLECTIONS } from "@/features/snippets/config/collections";

export type NavLink = {
  href: string;
  label: string;
};

export type IconNavLink = NavLink & { icon: LucideIcon };

export const COLLECTION_LINKS: NavLink[] = [
  { href: "/", label: "All" },
  ...SNIPPET_COLLECTIONS.map(({ slug, label }) => ({
    href: `/${slug}`,
    label,
  })),
];

export const LIBRARY_LINKS: IconNavLink[] = [
  { href: "/palettes", label: "Color Palettes", icon: Palette },
  { href: "/resources", label: "Dev Resources", icon: BookOpen },
];

export const TOOL_LINKS: IconNavLink[] = [
  { href: "/code-editor", label: "Code Editor", icon: Code2 },
  { href: "/gradient", label: "Gradient Generator", icon: Blend },
  { href: "/border-radius", label: "Border Radius", icon: Squircle },
];

export const FOOTER_LINKS: NavLink[] = [
  { href: "/buttons", label: "Components" },
  ...LIBRARY_LINKS,
  ...TOOL_LINKS.slice(0, 1),
  { href: "/contribute", label: "Contribute" },
];
