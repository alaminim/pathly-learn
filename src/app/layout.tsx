import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pathly Learn — Master Every Subject, Even Without Internet',
  description:
    'Reading-first, NERDC-aligned lessons for Nigerian JSS1–SS3 students. Lightweight offline packs and a Socratic AI study companion.'
};

export const viewport: Viewport = {
  themeColor: '#6D45D9',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8FAFC] text-[#171923] antialiased selection:bg-[#EDE7FF] selection:text-[#5B35C5]">
        {children}
      </body>
    </html>
  );
}
