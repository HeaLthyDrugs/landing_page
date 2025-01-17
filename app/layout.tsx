import type { Metadata } from "next";
import { Zeyada, Playfair_Display, Source_Sans_3, Montserrat } from "next/font/google";
import "./globals.css";

// Primary decorative font for headings
const zeyada = Zeyada({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zeyada',
  display: 'swap',
});

// Secondary font for body text
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Calm heading font
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Relaxed body font
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TravelHub - Discover Your Next Adventure",
  description: "Experience unforgettable journeys with TravelHub's curated travel experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zeyada.variable} ${montserrat.variable} ${playfair.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
