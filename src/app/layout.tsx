import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Adflair",
  description:
    "Digital Adflair is a full-service digital marketing and IT solutions agency based in Bangalore, India. We help businesses grow online with smart strategies, powerful technology, and creative marketing.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${spaceGrotesk.variable} antialiased font-font-space-grotesk`,
          spaceGrotesk.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
