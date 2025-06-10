import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import type { ReactNode } from "react";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "MetEngine Docs - One-click LP, Copy trade DLMM positions, track IL in Real-Time all from Telegram.",
  description:
    "MetEngine is a Telegram bot that allows you to create instant DLMM (Dynamic Liquidity Market Making) positions and track them in real-time. It lets you Auto-Copy one wallet’s LP positions with millisecond-level precision. Set it once, and every move they make is mirrored automatically - no clicks",
  keywords:
    "MetEngine Docs Solana, DLMM, Solana, DeFi, Met, Metengine, docs, Metengine, Metengine docs, Liquidity, Auto copy trade, LP, LP Telegram Bot, auto copy LP, copy lp, liquidity providing, liquidity providing on solana, Meteora, Jupiter",
  authors: [{ name: "MetEngine" }],
  category: "DeFi",
  metadataBase: new URL("https://docs.metengine.xyz"),
  alternates: {
    canonical: "https://docs.metengine.xyz",
  },
  openGraph: {
    title:
      "MetEngine Docs",
    description:
      "One-click LP, Copy trade DLMM positions, track IL in Real-Time all from Telegram.",
    url: "https://docs.metengine.xyz",
    siteName: "MetEngine",
    images: [
      {
        url: "/met.jpeg",
        width: 800,
        height: 800,
        alt: "MetEngine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MetEngine Docs",
    description:
      "One-click LP, Copy trade DLMM positions, track IL in Real-Time all from Telegram.",
    images: ["/met.jpeg"],
  },
  icons: {
    icon: "/met.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
