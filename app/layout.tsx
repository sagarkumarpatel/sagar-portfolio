import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from './providers'; // Import the new wrapper
import Header from '@/app/layouts/Header';
import Footer from '@/app/layouts/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
});

export const metadata: Metadata = {
  title: 'Sagar Kumar Patel | Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in React, Node.js, and AI-driven applications. Winner of IIT Hyderabad Tech Expo 2026.',
  // ... rest of your metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}