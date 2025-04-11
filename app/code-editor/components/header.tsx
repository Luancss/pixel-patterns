import { Blocks, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonEffect } from "../../../components/button-effect";
import { ThemeSelector } from "./theme-selector";
import { LanguageSelector } from "./language-selector";
import { RunButton } from "./run-button";
export async function Header() {
  // const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  // const user = await currentUser();

  // const convexUser = await convex.query(api.users.getUser, {
  //   userId: user?.id || "",
  // });

  return (
    <div className="relative z-10">
      <div
        className="flex items-center lg:justify-between justify-center 
        bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg"
      >
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
            />

            <Image
              src="/logo.svg"
              width={50}
              height={50}
              alt="Logo"
              className="rounded-xl"
            />

            <div className="flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                Pixel Patterns
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <RunButton />
            <ThemeSelector />
            <LanguageSelector hasAccess={true} />
          </div>

          {/* {!convexUser?.isPro && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
                transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Pro
              </span>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
}
