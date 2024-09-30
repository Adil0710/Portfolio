"use client"
// components/Preloader.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;

    // GSAP animation for preloader
    const timeline = gsap.timeline({
      onComplete: () => {
        // Trigger callback to notify parent that loading is done
        onLoadingComplete();
      }
    });

    timeline.to(preloader, {
      opacity: 0,
      duration: 1.5,
      delay: 2, // Add delay for preloader visibility
      ease: "power3.out",
    });
  }, [onLoadingComplete]);

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <WavyBackgroundDemo />
    </div>
  );
};

export default Preloader;
