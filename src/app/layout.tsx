import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/mdx.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P85RBH77');`}
        </Script>
        <meta
          name="google-site-verification"
          content="Wcc7ZucSLJraMO9OkagUOaVeRsUS6_DnPLpMFHwOYJk"
        />
      </head>
      <body
        className={cn(
          `${inter.variable} antialiased font-sans`,
          inter.className
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P85RBH77"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
