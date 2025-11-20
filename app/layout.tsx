import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CustomCursor } from "@/components/custom-cursor";
import { Navigation } from "@/components/navigation";
import SmoothScroll from "@/components/global/SmoothScroll";
import NavigationLine from "@/components/global/navigation-line";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital North",
  description: "We build digital products that push boundaries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Cursor */}
        <CustomCursor />

        {/* Top Navigation */}
        <Navigation />

        {/* Smooth scroll around scrollable content */}
        <SmoothScroll>
          {/* Cosmic vertical line */}
          <NavigationLine />

          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
