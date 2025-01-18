"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillsData } from "@/lib/SkillsData";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skills = SkillsData();

function Skills() {
  return (
    <section
      className="mt-12 max-w-[45.3rem] scroll-mt-24 px-5 lg:px-0 md:px-5"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className=" mt-10">
        <ul className=" flex flex-wrap justify-center sm:gap-2 gap-2.5 text-black/90 dark:text-white/75">
          {skills.map((skill, index) => (
            <motion.li
              className=" BorderAndBg rounded-xl min-w-20 max-w-20 sm:min-w-24 sm:max-w-24 px-5 py-2 flex flex-col gap-2 cursor-pointer items-center group"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className=" group-hover:scale-110 transition-all">
                {skill.icon}
              </div>
              <p className=" font-medium text-xs">{skill.name}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
