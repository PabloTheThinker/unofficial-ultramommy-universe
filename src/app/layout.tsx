import type { Metadata } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ultra Mommy Universe — Fan Wiki & Hub",
    template: "%s | Ultra Mommy Universe",
  },
  description:
    "The unofficial fan wiki for @SuperSisi's Ultra Mommy Universe — giant heroines, lore, and community.",
  openGraph: {
    title: "Ultra Mommy Universe — Fan Wiki & Hub",
    description:
      "Where Giant Heroines Protect (and Slay) the Earth! A fan tribute to @SuperSisi's creations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${rajdhani.variable} ${jetbrains.variable} font-sans min-h-screen flex flex-col`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
