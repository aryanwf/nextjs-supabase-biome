import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next.js supabase starter',
  description: 'a clean next.js template with supabase, tailwind, and biome.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`min-h-screen ${inter.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
