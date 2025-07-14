'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
    forcedTheme="dark"
  >
    {children}
  </NextThemesProvider>
);
