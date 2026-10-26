import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

import { SiteBackground } from "@/components/layout/site-background";
import { siteConfig, siteJsonLd } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt-BR",
    type: "website",
    images: [{ ...siteConfig.ogImage, alt: siteConfig.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Toaster />
        <div className="relative h-full w-full bg-black">
          <SiteBackground />
          <div className="flex min-h-screen flex-col box-border">
            <div className="flex flex-col gap-y-10 items-center z-20">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
