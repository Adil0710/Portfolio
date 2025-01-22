import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeSwitch from '@/components/ThemeSwitch';
import { useRouter, usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.0) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleNavClick = (link: string) => {
    // Check if the link is a hash link (internal sections)
    if (link.startsWith("#")) {
      // If on a different route, navigate to the home page and append the hash
      if (pathname !== "/") {
        router.push(`/${link}`);
      } else {
        // Scroll to the section on the current page
        const sectionId = link.replace("#", "");
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Handle normal route navigation
      router.push(link);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed sm:bottom-8 bottom-5 inset-x-0 mx-auto border rounded-full dark:bg-neutral-950 bg-white z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link=${idx}`}
            onClick={() => handleNavClick(navItem.link)}
            className={cn(
              "relative dark:text-neutral-300  items-center justify-center flex space-x-1 text-neutral-800 dark:hover:text-white hover:text-black font-medium duration-200"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* <span className="absolute inset-x-0 w-full mx-auto -bottom-[6.5px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" /> */}
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            
          </button>
        ))}
        <ThemeSwitch />
      </motion.div>
    </AnimatePresence>
  );
};