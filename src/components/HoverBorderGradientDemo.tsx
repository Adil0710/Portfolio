"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className=" flex text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-[#f4f4f0] dark:bg-[#1d1d16] text-foreground/75 py-1 md:text-sm text-xs group font-medium"
      >
        <a href="https://drive.google.com/file/d/1o3PBo-CGQNJwsBlDclLOsaghvTK1-ONo/view?usp=drive_link" target="_blank" className="flex items-center space-x-2">
 
        <span>Resume</span>
        <AceternityLogo />
        </a>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="60"
      height="59"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-foreground/75 group-hover:translate-x-1 transition-all"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
