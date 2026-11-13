import Image from "next/image";
import Link from "next/link";

import { FOOTER_LINKS } from "@/components/layout/navigation-links";
import { siteConfig } from "@/config/site";

const FIRST_RELEASE_YEAR = 2024;

export function Footer() {
  const { author } = siteConfig;
  const year = new Date().getFullYear();
  const copyrightYears =
    year > FIRST_RELEASE_YEAR ? `${FIRST_RELEASE_YEAR}–${year}` : `${year}`;

  return (
    <footer className="mb-10 flex w-[min(60rem,calc(100vw-2rem))] flex-col items-center gap-6 border-t border-white/10 pt-10">
      <Link
        href={author.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <Image
          alt={author.name}
          src={author.avatarUrl}
          width={48}
          height={48}
          className="rounded-full ring-2 ring-white/10 transition group-hover:ring-blue-500/50"
        />
        <span className="text-sm text-zinc-400">
          Made by{" "}
          <span className="font-medium text-zinc-200 underline-offset-4 group-hover:underline">
            {author.name}
          </span>
        </span>
      </Link>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {FOOTER_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={siteConfig.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>

      <p className="text-xs text-zinc-500">
        © {copyrightYears} {siteConfig.name} · MIT License
      </p>
    </footer>
  );
}
