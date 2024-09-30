"use client";

import { Inter } from "next/font/google";
import { metadata } from "@/app/metadata"; // Import from the new metadata file
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/themeContext";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[rgba(0,0,0)] relative`}>
        <ThemeProvider>
          {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}
          {!isLoading && (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
