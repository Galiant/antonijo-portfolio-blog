import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antonijo Galic',
  description: 'Personal webpage and blog by Antonijo Galic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-slate-900 text-slate-100'>
      <body className={urbanist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
