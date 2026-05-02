import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopBanner from "./components/TopBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nationalCondensed = localFont({
  src: "../fonts/National 2 Condensed Bold.ttf",
  variable: "--font-title",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autowahab.se'),
  title: "AutoWahab - Vi Köper Era Lastbilar",
  description: "Sälj din lastbil snabbt och enkelt till AutoWahab. Få en offert idag!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nationalCondensed.variable} antialiased bg-white`}
      >
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
