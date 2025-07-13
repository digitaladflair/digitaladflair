// layout.tsx or layout.js
import { DM_Sans, Roboto_Mono } from 'next/font/google'; // ⬅️ use DMSans
import './globals.css';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { HeadTag } from '../components/Head';

const dmSans = DM_Sans({
  weight: '400', // Regular only
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${robotoMono.variable}`}>
      <HeadTag />
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
