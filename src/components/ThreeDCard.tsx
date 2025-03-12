"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
      <div className="sm:mt-20 mt-14 sm:grid sm:grid-cols-2 sm:gap-x-4 flex flex-col">
        {projectData
          .slice(0, showAll ? projectData.length : 4)
          .map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-[#0870b8]/[0.25] transition-shadow duration-300 dark:bg-[#050505] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col sm:-mt-32 -mt-24 justify-between min-h-[450px] max-h-[550px]">
                <CardItem
                  translateZ="50"
                  className="text-md font-bold text-neutral-700 dark:text-neutral-200"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-600 text-xs text-left max-w-sm leading-normal dark:text-neutral-400"
                >
                  {project.description}
                </CardItem>
                <div className="sm:mt-1 mt-1.5 flex flex-row flex-wrap gap-2">
                  {project.tech.map((techno, index) => (
                    <CardItem
                      key={index}
                      as="span"
                      translateZ="80"
                      className="block bg-gray-100 border dark:bg-neutral-800 rounded-full py-0.5 px-2 text-neutral-600 text-[10.5px] leading-4 tracking-wide text-left dark:text-neutral-400"
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
                    Visit now <ArrowUpRight size={15} />
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
            </CardContainer>
          ))}
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showAll ? 1 : 0, height: showAll ? "auto" : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      <button
        onClick={() => setShowAll(!showAll)}
        className="inline-flex absolute left-1/2 -translate-x-1/2 bottom-5 items-center gap-1 text-sm transition-all dark:text-white/75 duration-200 text-neutral-600 font-semibold dark:hover:text-white hover:text-black"
      >
        {showAll ? "See less" : "See more"}
        <motion.div
          animate={{ rotate: showAll ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <MdKeyboardArrowDown className="text-xl" />
        </motion.div>
      </button>
    </div>
  );
}
