"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className=" sm:mb-28 mb-20 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className=" TextClr text-sm -mt-5">
        Please contact me directly at{" "}
        <a
          href="mailto:Padil2246@gmail.com"
          className=" font-semibold underline text-black dark:text-white"
        >
          Padil2246@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className=" mt-10 flex flex-col">
        <input
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="TextClr text-sm h-14 px-4 rounded-lg border BorderAndBg dark:focus:black/10 dark:outline:black/10 focus:outline-black/60"
        />
        <textarea
          placeholder="Your message"
          required
          maxLength={500}
          className=" text-sm TextClr BorderAndBg h-52 my-3 p-4 rounded-lg resize-none focus:outline-black/60"
        />
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="group dark:bg-black bg-white text-black dark:text-white w-[8rem] flex items-center justify-center gap-2 group text-sm"
        >
          Submit{" "}
          <FaPaperPlane className=" text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />{" "}
        </HoverBorderGradient>
      </form>
    </motion.section>
  );
}

export default Contact;
