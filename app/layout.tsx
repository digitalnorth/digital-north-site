import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CustomCursor } from '@/components/custom-cursor';
import { Navigation } from '@/components/navigation';

// New components we are adding
import SmoothScroll from '@/components/global/SmoothScroll';
import NavigationLine from '@/components/global/navigation-line';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital North',
  description: 'We build digital products that push boundaries',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cosmos text-starlight overflow-x-hidden`}>
        
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Global Navigation Bar */}
        <Navigation />

        {/* Smooth Scroll + Cosmic Spine */}
        <SmoothScroll>

          {/* Cosmic Navigation Line */}
          <NavigationLine />

          {/* MAIN CONTENT */}
          <main className="relative z-10">
            {children}
          </main>

        </SmoothScroll>
      </body>
    </html>
  );
}
