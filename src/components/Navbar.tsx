"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconBrain, IconDeviceLaptop, IconMail, IconBriefcase } from "@tabler/icons-react";

function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "#about",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Skills",
          link: "#skills",
          icon: <IconBrain className="h-4 w-4 text-neutral-500 dark:text-white" />          
        },
        {
          name: "Experience",
          link: "#experience",
          icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
        },
        {
          name: "Projects",
          link: "#projects",
          icon: <IconDeviceLaptop className="h-4 w-4 text-neutral-500 dark:text-white" />        
        },
        {
          name: "Contact",
          link: "#contact",
          icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />
        },
      ];
      return (
        <div className="relative w-full">
          <FloatingNav navItems={navItems} />
          
        </div>
      );
    }
 
export default Navbar