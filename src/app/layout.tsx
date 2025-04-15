import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Roonity",
  description: "Rohit Pottavathini | Full-Stack Engineer - Code, Create, Innovate",
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
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-900 text-white antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-6 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
