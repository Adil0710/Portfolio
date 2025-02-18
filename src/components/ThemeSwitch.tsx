"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "@/context/themeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-800 hover:text-black dark:text-neutral-200 transition-all duration-200 dark:hover:text-white px-4 sm:px-4 py-1.5 rounded-full"
    >
      <span>
        {theme === "light" ? (
          <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        ) : (
          <MoonIcon className="h-[1rem] w-[1rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        )}
      </span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r transition-all from-transparent via-cyan-500 to-transparent h-px" />
    </button>
  );
};

export default ThemeSwitch;
