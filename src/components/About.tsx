"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

function About() {
  return (
    <section
      className="mt-10 max-w-[45.3rem] z-20 scroll-mt-44 leading-8 px-5 lg:px-0 md:px-5"
      id="about"
    >
      <BlurFade delay={0.04 * 3}>
      <SectionHeading>About Me</SectionHeading>
      </BlurFade>
      <BlurFade delay={0.04 * 4}>
      <p className="text-left TextClr mt-5">
        I&apos;m a dedicated {" "}
        <span className="font-semibold underline chipText">
          {" "}
          Full-stack developer
        </span>{" "}
        with nearly a year of experience building interactive, high-performance web applications using{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          React,
        </span>{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          Next.js,
        </span>{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          Node.js
        </span>{" "}
        and{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          MongoDB.
        </span>{" "}
        I specialize in creating efficient, user-friendly solutions and have expertise in both{" "}
        <span className="font-semibold underline chipText">
          Front-end
        </span>{" "}
        and{" "}
        <span className="font-semibold underline chipText">
          Back-end
        </span>{" "}
        development. I enjoy sharing my knowledge through teaching and mentoring others in tech. When I&apos;m not coding, I love playing video games.
      </p>
      </BlurFade>
      
    </section>
  );
}

export default About;
