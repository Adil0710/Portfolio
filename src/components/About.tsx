"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";
import { aboutData } from "@/lib/aboutData";

function About() {
  return (
    <section
      className="mt-3 max-w-[45.3rem] z-20 scroll-mt-44 leading-8 px-5 lg:px-0 md:px-5"
      id="about"
    >
      <BlurFade delay={0.04 * 4}>
        <SectionHeading>{aboutData.title}</SectionHeading>
      </BlurFade>
      <BlurFade delay={0.04 * 5}>
        <p className="text-left TextClr mt-3 tracking-wide">
          I&apos;m a {" "}
          <span className="font-semibold underline decoration-dotted decoration-foreground/50 underline-offset-2 chipText">
            {" "}
            {aboutData.roleLabel}
          </span>{" "}
          {aboutData.experienceText}{" "}
          <span className="inline-flex items-center align-middle rounded-md mr-1 py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6 shadow-chip-inset border">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            {aboutData.technologies[0]}
          </span>{" "}
          <span className="inline-flex items-center align-middle rounded-md mr-1 py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6 shadow-chip-inset border">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            {aboutData.technologies[1]}
          </span>{" "}
          <span className="inline-flex items-center align-middle rounded-md py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6 shadow-chip-inset border">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            {aboutData.technologies[2]}
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center align-middle rounded-md py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6 shadow-chip-inset border">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            {aboutData.technologies[3]}.
          </span>{" "}
          <br />
          <span className="mt-3 inline-block">{aboutData.specializationPrefix}</span>{" "}
          <span className="font-semibold underline decoration-dotted decoration-foreground/50 underline-offset-2 chipText">
            {aboutData.frontEndLabel}
          </span>{" "}
          and{" "}
          <span className="font-semibold underline decoration-dotted decoration-foreground/50 underline-offset-2 chipText">
            {aboutData.backEndLabel}
          </span>{" "}
          <br />
          <span className="mt-3 inline-block"> {aboutData.closingText}</span>
        </p>
      </BlurFade>
    </section>
  );
}

export default About;
