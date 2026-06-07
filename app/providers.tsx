'use client';

import { ThemeProvider } from '@/app/components/ui/ThemProvider';
import CustomCursor from '@/app/components/ui/CustomCursor';
import FloatingSocial from '@/app/components/ui/FloatingSocial';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CustomCursor />
      {children}
      <FloatingSocial />
    </ThemeProvider>
  );
}