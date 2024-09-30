"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Show preloader if loading */}
      {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}

      {/* Show entire content (Navbar + main + Footer) once loading is done */}
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
