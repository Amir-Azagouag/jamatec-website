import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamatec Kantoorautomatisering B.V. - Cybersecurity Divisie",
  description: "Uitbreiding van tientallen jaren kantoorautomatisering excellentie naar uitgebreide cybersecurity diensten. Jamatec Kantoorautomatisering B.V. biedt penetratietesten, beveiligingsadvies, 24/7 monitoring, incident response en beveiligingstraining met dezelfde vertrouwde professionaliteit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
