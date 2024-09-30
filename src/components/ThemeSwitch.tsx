'use client';
import React from 'react';
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from '@/context/themeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-600 hover:text-neutral-800 dark:text-white/90 dark:hover:text-white px-4 sm:px-6 py-2 rounded-full">
      <span>{theme === 'light' ? <IconSun size={20} /> : <IconMoon size={20} />}</span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    </button>
  );
};

export default ThemeSwitch;
