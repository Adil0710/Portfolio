"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import maplibregl, { type Map as MapLibreMap } from "maplibre-gl";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  cloudSrc?: string;
  planeSrc?: string;
  planeShadowSrc?: string;
};

export default function MapHeroCard({
  className,
  cloudSrc = "/cloud.webp",
  planeSrc = "/plane.webp",
  planeShadowSrc = "/plane-shadow.webp",
}: Props) {
  const { resolvedTheme } = useTheme();
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    resolvedTheme,
  );
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const styleRef = useRef<string | null>(null);
  const hasZoomed = useRef(false);

  // Sync with next-themes resolvedTheme
  useEffect(() => {
    setCurrentTheme(
      resolvedTheme ??
        (document.documentElement.classList.contains("dark")
          ? "dark"
          : "light"),
    );
  }, [resolvedTheme]);

  // Also listen for manual class changes on documentElement (for AnimatedThemeToggler)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setCurrentTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (!currentTheme) {
      setCurrentTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
      return;
    }

    const isDark = currentTheme === "dark";
    const maptilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;
    if (!maptilerKey) return;

    const nextStyle = isDark
      ? `https://api.maptiler.com/maps/base-v4-dark/style.json?key=${maptilerKey}`
      : `https://api.maptiler.com/maps/basic-v2/style.json?key=${maptilerKey}`;

    const coordinates: [number, number] = [75.887083, 17.643917];

    if (!mapRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: nextStyle,
        center: [60, 20],
        zoom: 2.4,
        attributionControl: false,
        interactive: true,
        scrollZoom: true,
        dragPan: true,
      });

      map.on("load", () => {
        // Create custom marker element
        const el = document.createElement("div");
        el.className = "relative flex items-center justify-center";
        el.innerHTML = `
          <div class="absolute inset-0 m-auto w-4 h-4 bg-cyan-500 rounded-full opacity-50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div class="relative w-3 h-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-1 border-white shadow-lg shadow-blue-500/50"></div>
        `;

        markerRef.current = new maplibregl.Marker({ element: el })
          .setLngLat(coordinates)
          .addTo(map);

        if (!hasZoomed.current) {
          map.flyTo({
            center: coordinates,
            zoom: 12,
            duration: 4000,
            essential: true,
          });
          hasZoomed.current = true;
        }
      });

      // Ensure correct sizing on initial paint (especially when mounted in animated containers)
      requestAnimationFrame(() => map.resize());

      mapRef.current = map;
      styleRef.current = nextStyle;
    } else {
      const map = mapRef.current;
      if (styleRef.current !== nextStyle) {
        const center = map.getCenter();
        const zoom = map.getZoom();

        map.setStyle(nextStyle, { diff: true });
        map.once("style.load", () => {
          map.setCenter(center);
          map.setZoom(zoom);

          if (markerRef.current) {
            markerRef.current.remove();
            markerRef.current.addTo(map);
          }
        });
        styleRef.current = nextStyle;
      }
    }
  }, [currentTheme]);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div
      className={cn(
        "group relative h-48 overflow-hidden rounded-t-2xl mt-5 max-w-[45rem] mx-auto z-10",
        className,
      )}
    >
      <div ref={mapContainerRef} className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(transparent,#f4f4f0_90%)] dark:bg-[linear-gradient(transparent,#1D1D16_90%)] z-10" />

      <div className="absolute inset-0 pointer-events-none z-20 transition-all duration-300 group-hover:opacity-0 group-hover:[filter:blur(6px)] [filter:blur(0px)]">
        {/* Cloud - coming from right, going left slowly */}
        <motion.img
          initial={{ x: isDesktop ? "220%" : "120%", y: "-20%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: isDesktop ? 120 : 60,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          width={390}
          height={347}
          alt="cloud"
          draggable={false}
          className="absolute size-80 blur-xs opacity-75 dark:opacity-10"
          src={cloudSrc}
        />

        {/* Plane Shadow - trails behind and slightly below the plane */}
        <motion.img
          initial={{
            x: isDesktop ? "40%" : "40%",
            y: isDesktop ? "210%" : "250%",
            opacity: 1,
            rotate: -55,
          }}
          animate={{
            x: isDesktop ? "-2600%" : "-1650%",
            y: isDesktop ? "-500%" : "-550%",
          }}
          transition={{
            duration: isDesktop ? 30 : 20,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          width={30}
          height={30}
          alt="plane-shadow"
          draggable={false}
          className="absolute filter blur-[1px] bottom-0 right-0 opacity-70"
          src={planeShadowSrc}
        />

        {/* Plane - bottom right to upper left */}
        <motion.img
          initial={{
            x: isDesktop ? "160%" : "100%",
            y: isDesktop ? "80%" : "100%",
            opacity: 1,
            rotate: -55,
          }}
          animate={{
            x: isDesktop ? "-2500%" : "-1500%",
            y: isDesktop ? "-200%" : "-200%",
          }}
          transition={{
            duration: isDesktop ? 30 : 20,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          width={30}
          height={30}
          alt="plane"
          draggable={false}
          className="absolute bottom-0 right-0"
          src={planeSrc}
        />
      </div>
    </div>
  );
}
