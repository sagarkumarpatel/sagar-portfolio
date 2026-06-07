import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/app/layouts/Header';
import Footer from '@/app/layouts/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sagarkumarpatel.dev'),
  title: {
    default: 'Sagar Kumar Patel | Full Stack Developer',
    template: '%s | Sagar Patel',
  },
  description: 'Full Stack Developer specializing in React, Node.js, and AI-driven applications. Winner of IIT Hyderabad Tech Expo 2026.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Expert',
    'Node.js Developer',
    'Software Engineer',
    'Sagar Patel',
    'Portfolio',
  ].join(', '),
  authors: [{ name: 'Sagar Kumar Patel', url: 'https://github.com/sagarkumarpatel' }],
  creator: 'Sagar Kumar Patel',
  publisher: 'Sagar Kumar Patel',
  openGraph: {
    title: 'Sagar Kumar Patel - Full Stack Developer',
    description: 'Building scalable web applications with modern tech stack',
    url: 'https://sagarkumarpatel.dev',
    siteName: 'Sagar Patel Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sagar Patel - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Kumar Patel - Full Stack Developer',
    description: 'Building scalable web applications with modern tech stack',
    images: ['/og-image.jpg'],
    creator: '@sagarkumarpatel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://sagarkumarpatel.dev',
  },
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