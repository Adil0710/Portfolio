"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => setIsLoading(false);
    document.addEventListener("preloaderComplete", handleComplete);

    return () => {
      document.removeEventListener("preloaderComplete", handleComplete);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && (
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
