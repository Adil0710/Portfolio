"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function page() {
  return (
    <div className=" flex min-h-screen flex-col gap-5 items-center justify-center">
      <h2 className=" TextClr font-bold sm:text-3xl text-2xl text-center">
        This section is under developement.
      </h2>
      <h2 className=" TextClr font-medium sm:text-lg text-xs text-center">
        or you can find more projects on my github !
      </h2>
      <div className=" flex flex-row gap-5 mt-5">
        <Link
          href="/"
          className="px-2 py-1.5 rounded-lg border border-black dark:border-white/95 dark:text-white/95 text-black flex flex-row items-center justify-center gap-1 text-sm font-medium"
        >
          
          Home
        </Link>
        <Link
        target="_blank"
          href="https://github.com/Adil0710"
          className="px-2 py-1.5 rounded-lg bg-black/85 dark:bg-white/95 dark:text-black text-white flex flex-row items-center justify-center gap-1 text-sm font-medium"
        >
          <FaGithub className="text-base" /> Github
        </Link>

        <Signature />
      </div>
    </div>
  );
}

export default page;




const Signature = () => {
  return (
    <motion.svg
      viewBox="0 0 500 150"
      className="mx-auto h-10"
    >
      {/* A */}
      <motion.path
        d="M50 110 L80 20 L110 110 M65 75 L95 75"
        stroke="currentColor"
        strokeWidth="3"
        fill="transparent"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* d */}
      <motion.path
        d="M130 110 L130 20 M130 75 C130 50, 180 50, 180 75 C180 100, 130 100, 130 75"
        stroke="currentColor"
        strokeWidth="3"
        fill="transparent"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />

      {/* i */}
      <motion.path
        d="M210 110 L210 60 M210 40 L210 40"
        stroke="currentColor"
        strokeWidth="3"
        fill="transparent"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      />

      {/* l */}
      <motion.path
        d="M250 110 L250 30"
        stroke="currentColor"
        strokeWidth="3"
        fill="transparent"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

