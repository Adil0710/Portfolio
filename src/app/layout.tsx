import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adil Portfolio",
  description: "Developed by Adil Patel (Fullstack Developer)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} dark:bg-[rgba(6,6,6)]`}>
    <ThemeProvider>
        <Navbar/>
        {children}
    </ThemeProvider>
        </body>
    </html>
  );
}
