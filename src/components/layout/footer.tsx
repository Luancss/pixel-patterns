import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  const { author } = siteConfig;

  return (
    <div className="flex items-center justify-center flex-col gap-2 mb-10">
      <div className="flex flex-col items-center gap-2">
        <Image
          alt={author.name}
          src={author.avatarUrl}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-gray-300">
          Made by{" "}
          <Link
            href={author.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 underline"
          >
            {author.name}
          </Link>
        </p>
      </div>
      <p className="text-gray-300">© 2024 {siteConfig.name}</p>
    </div>
  );
}
