'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { SessionProvider } from 'next-auth/react';

type AppProviderProps = {
  children: ReactNode;
};
export function AppProvider({ children }: AppProviderProps) {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
}
