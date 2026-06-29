import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbvar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "AnimeList — Discover Top Anime",
  description: "Browse and discover top anime series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
        <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">
          © 2025 AnimeList · Data from Jikan API
        </footer>
      </body>
    </html>
  );
}
