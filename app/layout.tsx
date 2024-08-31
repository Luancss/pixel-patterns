import "./globals.css";

import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Background } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Patterns",
  description:
    "O Pixel Patterns é um projeto voltado para desenvolvedores que visa simplificar a integração de componentes CSS e Tailwind em seus projetos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="relative h-full w-full bg-black">
          <Background />
          <div className="flex min-h-screen flex-col pb-20 box-border">
            <div className="flex flex-col gap-y-10 items-center text-center m-auto z-20 px-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
