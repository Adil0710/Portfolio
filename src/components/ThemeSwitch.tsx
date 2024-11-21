"use client";
import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "@/context/themeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 transition-all duration-200 dark:hover:text-white px-4 sm:px-6 py-2 rounded-full"
    >
      <span>
        {theme === "light" ? (
          <SunIcon className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        ) : (
          <MoonIcon className="h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )}
      </span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
    </button>
  );
};

export default ThemeSwitch;
