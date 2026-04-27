"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projectData } from "@/lib/data";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";

export function ThreeDCardDemo() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative text-center">
      <div className=" mt-16 sm:grid sm:grid-cols-2 sm:gap-x-4 flex flex-col">
        <AnimatePresence>
          {projectData
            .slice(0, showAll ? projectData.length : 4)
            .map((project, index) => (
              <motion.div
                key={index} 
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{ 
                  opacity: 1, 
                  maxHeight: 1000, 
                  transition: { duration: 1, ease: [0.16, 0.5, 0.3, 1] }
                }}
                exit={{ 
                  opacity: 0, 
                  maxHeight: 0,
                  transition: { duration: 0.5, ease: [0.16, 0.5, 0.3, 1] }
                }}
               
              >
              
                <CardContainer className="">
                    <Link href={project.visit === "no" ? project.github : project.visit}>
                  <CardBody className="bg-[#f4f4f0] dark:bg-[#1d1d16] relative group/card hover:shadow-2xl hover:shadow-[#0870b8]/[0.25] transition-shadow duration-300 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col sm:-mt-32 -mt-24 justify-between min-h-[450px] max-h-[550px]">
                    <CardItem
                      translateZ="50"
                      className="text-base font-semibold text-foreground/75"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-foreground/60 text-xs text-left max-w-sm leading-relaxed tracking-normal "
                    >
                      {project.description}
                    </CardItem>
                    <div className="sm:mt-2 mt-1.5 flex flex-row flex-wrap gap-2">
                      {project.tech.map((techno, index) => (
                        <CardItem
                          key={index}
                          as="span"
                          translateZ="80"
                          className="block chip chipText border  rounded-full py-0.5 px-2 font-medium text-[10.5px] leading-4 tracking-wide text-left shadow-chip-inset"
                        >
                          {techno}
                        </CardItem>
                      ))}
                    </div>
                    <CardItem translateZ="100" className="w-full mt-5">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                        placeholder="blur"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-4">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.visit === "no" ? project.github : project.visit}
                        target="__blank"
                        className="px-2 py-1.5 flex gap-1 justify-center items-center rounded-xl text-xs font-normal dark:text-white"
                      >
                        Visit now <ArrowUpRight size={15} className="text-foreground/60" />
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.github}
                        target="__blank"
                        className="px-2 py-1.5 rounded-lg bg-black dark:bg-white dark:text-black text-white flex flex-row items-center justify-center gap-1 text-xs font-bold"
                      >
                        <FaGithub className="text-sm" /> Code
                      </CardItem>
                    </div>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px" />
                    </CardBody>
                     </Link>
                </CardContainer>
               
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="inline-flex absolute left-1/2 -translate-x-1/2 bottom-5 items-center gap-1 text-sm transition-all text-foreground/60 duration-200 font-semibold hover:text-foreground/75"
      >
        {showAll ? "See less" : "See more"}
        <motion.div
          animate={{ rotate: showAll ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <MdKeyboardArrowDown className="text-xl text-foreground/60 hover:text-foreground/75" />
        </motion.div>
      </button>
    </div>
  );
}

