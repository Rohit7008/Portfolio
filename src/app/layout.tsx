import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Roonity",
  description: "...",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  appleWebApp: {
    title: "Roonity",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
