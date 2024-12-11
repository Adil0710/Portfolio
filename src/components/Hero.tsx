"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { cn } from "@/lib/utils";

import { useTheme } from "@/context/themeContext";
import { Spotlight } from "./ui/Spotlight";
import Intro from "./Intro";

function Hero() {
  const { theme } = useTheme();

  return (
    <div className=" w-full" id="home">
      <AuroraBackground>
        <Intro />
      </AuroraBackground>
    </div>
  );
}

export default Hero;

{
  /* <div className=" w-full" id="home">
         {theme === 'light' ? (<AuroraBackground>
            <Intro/>
          </AuroraBackground>
          ) 
          
          : 
          
          ( 
          
          <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-80 md:-top-22"
              fill="white"
            />
            <Intro/>
          </div>)}
       </div> */
}
