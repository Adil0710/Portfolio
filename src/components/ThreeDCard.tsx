"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projectData } from "@/lib/data";
import { MdKeyboardArrowDown } from "react-icons/md";

export function ThreeDCardDemo() {
  return (
    <div className=" mb-28">
    <div className=" mt-24 sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col">
      {projectData.map((project, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.10] dark:bg-[#050505] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col -mt-32 justify-between min-h-[450px] max-h-[550px]">
            {/* Title */}
            <CardItem
              translateZ="50"
              className="text-md font-bold text-neutral-700 dark:text-neutral-200"
            >
              {project.title}
            </CardItem>

            {/* Description */}
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-600 text-xs text-left max-w-sm leading-normal dark:text-neutral-400"
            >
              {project.description}
            </CardItem>

            {/* Image */}
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            {/* Footer with buttons */}
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.visit === 'no' ? project.github : project.visit}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Visit now →
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
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
          </CardBody>
        </CardContainer>
      ))}
      
    </div>
    <Link href="/check" className=' inline-flex items-center gap-1 text-sm transition-all dark:text-white/75 duration-200 text-neutral-600 font-semibold dark:hover:text-white hover:text-black'>See more <MdKeyboardArrowDown className=' text-xl' /></Link>
    </div>
  );
}
