import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ProgressBar, ProgressBarProvider } from 'react-transition-progress';
import { SWRProvider } from '@/components/swr-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next.js supabase starter',
  description: 'a clean next.js template with supabase, tailwind, and biome.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SWRProvider>
          <ProgressBarProvider>
            <ProgressBar className="fixed top-0 h-1 bg-sky-500 shadow-lg shadow-sky-500/20" />
            {children}
            <Toaster />
          </ProgressBarProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
