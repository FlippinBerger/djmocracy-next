import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DJmocracy',
  description: 'Playlists by the people',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <div>
          <Link href='/events'>Events</Link>
          <Link href='/events'>Events</Link>
          <Link href='/events'>Events</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
