

import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { HeadTag } from '../components/Head';
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeadTag />
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
