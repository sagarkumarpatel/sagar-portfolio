// app/providers.tsx
'use client';

import { ThemeProvider } from '@/app/components/ui/ThemProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}