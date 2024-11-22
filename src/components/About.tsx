"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.section
      className=" mb-24 max-w-[45rem] scroll-mt-44 text-center leading-8 px-5 lg:px-0 md:px-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3 TextClr">
        I&apos;m a passionate{" "}
        <span className="rounded-lg py-0.5 chip chipText px-2 border border-transparent text-sm font-semibold cardShadow">
          {" "}
          full-stack developer
        </span>{" "}
        with almost 1 year of experience and a strong foundation in building web
        applications using technologies like{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText cardShadow px-2 border border-transparent text-sm font-semibold shadow-sm h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          React
        </span>{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText cardShadow px-2 border border-transparent text-sm font-semibold shadow-sm h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          Next.js,
        </span>{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText cardShadow px-2 border border-transparent text-sm font-semibold shadow-sm h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          Node.js,
        </span>{" "}
        and{" "}
        <span className="inline-flex items-center align-middle rounded-lg py-0.5 chip chipText cardShadow px-2 border border-transparent text-sm font-semibold shadow-sm h-6">
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
            alt="React Icon"
            className="w-4 h-4 mr-1 rounded-full"
            width={16}
            height={16}
          />
          MongoDB.
        </span>{" "}
        I have hands-on experience developing interactive, high-performance
        applications for companies such as MountainHigh Solutions and ArrowTech
        Technologies, where I successfully reduced latency and enhanced user
        experience. I enjoy creating efficient, user-friendly solutions, and I
        am skilled in both{" "}
        <span className="rounded-lg py-0.5 chip chipText cardShadow px-2 border border-transparent text-sm font-semibold shadow-sm">
          front-end
        </span>{" "}
        and{" "}
        <span className="rounded-lg py-0.5 chip chipText cardShadow px-2 border border-transparent text-sm font-semibold shadow-sm">
          back-end
        </span>{" "}
        development.
      </p>

      <p className="TextClr">
        I love sharing my knowledge through teaching and mentoring others in
        tech. When I&apos;m not coding, you can often find me enjoying video
        games.
      </p>
    </motion.section>
  );
}

export default About;
