"use client";
import { SPRING_CONFIG } from "../lib/motion-config";
import { cn } from "@/lib/utils";
import { IconMessage2, IconSettingsFilled, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MailFilledIcon from "./ui/mail-filled-icon";
import Contact from "./Contact";

type FontOption = "inter" | "schibsted" | "geist";
type ColorOption = "regular" | "rose" | "emerald" | "blue" | "amber" | "violet";

const FONTS: { id: FontOption; label: string; variable: string }[] = [
  {
    id: "schibsted",
    label: "Schibsted",
    variable: "var(--font-schibsted-grotesk)",
  },
  { id: "inter", label: "Inter", variable: "var(--font-inter)" },
  { id: "geist", label: "Geist", variable: "var(--font-geist-sans)" },
];

const COLORS: {
  id: ColorOption;
  label: string;
  swatch: string;
  bg: string;
  primary: string;
  foreground: string;
  gradientFrom: string;
  gradientTo: string;
  ringOffset: string;
  activeRing: string;
}[] = [
  {
    id: "regular",
    label: "Paper",
    swatch: "bg-stone-500",
    bg: "var(--color-stone-50)",
    primary: "var(--color-stone-800)",
    foreground: "var(--color-stone-600)",
    gradientFrom: "from-stone-500",
    gradientTo: "to-neutral-800",
    ringOffset: "ring-offset-stone-600",
    activeRing: "ring-stone-600",
  },
  {
    id: "rose",
    label: "Bloom",
    swatch: "bg-fuchsia-500",
    bg: "var(--color-rose-50)",
    primary: "var(--color-rose-900)",
    foreground: "var(--color-rose-600)",
    gradientFrom: "from-rose-400",
    gradientTo: "to-fuchsia-700",
    ringOffset: "ring-offset-fuchsia-500",
    activeRing: "ring-fuchsia-500",
  },
  {
    id: "emerald",
    label: "Lagoon",
    swatch: "bg-teal-500",
    bg: "var(--color-teal-50)",
    primary: "var(--color-teal-900)",
    foreground: "var(--color-teal-600)",
    gradientFrom: "from-teal-400",
    gradientTo: "to-cyan-700",
    ringOffset: "ring-offset-teal-500",
    activeRing: "ring-teal-500",
  },
  {
    id: "blue",
    label: "Nocturne",
    swatch: "bg-indigo-500",
    bg: "var(--color-indigo-50)",
    primary: "var(--color-indigo-950)",
    foreground: "var(--color-indigo-600)",
    gradientFrom: "from-indigo-400",
    gradientTo: "to-violet-700",
    ringOffset: "ring-offset-indigo-500",
    activeRing: "ring-indigo-500",
  },
  {
    id: "amber",
    label: "Honey",
    swatch: "bg-amber-500",
    bg: "var(--color-amber-50)",
    primary: "var(--color-amber-950)",
    foreground: "var(--color-amber-700)",
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-600",
    ringOffset: "ring-offset-amber-500",
    activeRing: "ring-amber-500",
  },
  {
    id: "violet",
    label: "Lilac",
    swatch: "bg-violet-500",
    bg: "var(--color-violet-50)",
    primary: "var(--color-violet-950)",
    foreground: "var(--color-violet-600)",
    gradientFrom: "from-violet-400",
    gradientTo: "to-purple-700",
    ringOffset: "ring-offset-violet-500",
    activeRing: "ring-violet-500",
  },
];

const STORAGE_KEY = "site-settings";

function isColorOption(value: unknown): value is ColorOption {
  return typeof value === "string" && COLORS.some((c) => c.id === value);
}

function loadSettings(): { font: FontOption; color: ColorOption } {
  if (typeof window === "undefined")
    return { font: "schibsted", color: "regular" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as {
        font?: FontOption;
        color?: unknown;
      };
      const color = isColorOption(parsed.color) ? parsed.color : "regular";
      const font =
        parsed.font && FONTS.some((f) => f.id === parsed.font)
          ? parsed.font
          : "schibsted";
      return { font, color };
    }
  } catch {}
  return { font: "schibsted", color: "regular" };
}

function saveSettings(font: FontOption, color: ColorOption) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ font, color }));
}

function applySettings(font: FontOption, color: ColorOption) {
  const root = document.documentElement;
  const fontConfig = FONTS.find((f) => f.id === font)!;

  root.style.setProperty("--primary-font", fontConfig.variable);
}

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = loadSettings();
    applySettings(saved.font, saved.color);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed top-4 right-4 z-50 flex flex-col items-end",
        "transform-gpu will-change-opacity",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      style={{ backfaceVisibility: "hidden" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {!open ? (
          <motion.button
            key="trigger"
            layoutId="settings-container"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "pointer-events-auto",
              "shadow-lg flex aspect-square size-10 items-center justify-center rounded-lg bg-gradient-to-b align-middle ring-1 transition-all",
              "from-stone-500 to-neutral-800 ring-white/20 ring-offset-2 ring-inset dark:ring-offset-stone-600",
              "bg-stone-100 from-stone-100 to-white ring-black/10 ring-offset-stone-200 dark:bg-transparent dark:from-stone-500 dark:to-neutral-800 dark:ring-white/20",
            )}
          >
            <MailFilledIcon className="size-6 shrink-0 text-foreground/60 drop-shadow-sm" />
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            layoutId="settings-container"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "pointer-events-auto",
              "[transform:translateZ(0)]",
              "will-change-opacity",
              "overscroll-contain",
              "w-80 rounded-xl bg-gradient-to-b p-4 shadow-lg ring-1 transition-all",
              "from-stone-500 to-neutral-800 ring-white/20 ring-offset-2 ring-inset dark:ring-offset-stone-600",
              "bg-stone-100 from-stone-100 to-white ring-black/10 ring-offset-stone-200 dark:bg-transparent dark:from-stone-500 dark:to-neutral-800 dark:ring-white/20",
            )}
          >
            <div className="text-foreground/75 text-sm font-medium">
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
