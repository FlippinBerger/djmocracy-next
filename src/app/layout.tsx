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
        className={`${inter.className} bg-slate-900 text-slate-100 flex gap-8 mx-auto p-4`}
      >
        <div className='flex flex-col'>
          <Link href='/'>DJmocracy</Link>
          <Link href='/events'>Events</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
