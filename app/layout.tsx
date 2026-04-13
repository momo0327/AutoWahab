import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Hat_Display } from "next/font/google";
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

const redHatDisplay = Red_Hat_Display({
  weight: "700",
  variable: "--font-title",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} antialiased bg-white`}
      >
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
