import "./globals.css";

import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Background } from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Patterns",
  description:
    "Open-source collection of ready-to-use, reusable components built with Tailwind CSS. Simply copy and paste into your next project for seamless integration. Perfect for developers looking to enhance their workflow with high-quality, customizable UI snippets.",
  openGraph: {
    title: "Pixel Patterns",
    description:
      "Open-source collection of ready-to-use, reusable components built with Tailwind CSS. Simply copy and paste into your next project for seamless integration. Perfect for developers looking to enhance their workflow with high-quality, customizable UI snippets.",
    url: "https://pixel-patterns-mauve.vercel.app/",
    siteName: "Pixel Patterns",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: `https://i.pinimg.com/originals/c9/ce/49/c9ce490ba57ba69c66688381be6937aa.jpg`,
        width: 1200,
        height: 730,
        alt: "Pixel Patterns",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <Toaster />
        <div className="relative h-full w-full bg-black">
          <Background />
          <div className="flex min-h-screen flex-col pb-20 box-border">
            <div className="flex flex-col gap-y-10 items-center m-auto z-20 px-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
