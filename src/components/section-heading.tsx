'use client'
import React, { ReactNode } from 'react'
import { motion, MotionConfig } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
}

function SectionHeading({children} : SectionHeadingProps) {
  return (
    <motion.div
    className=' text-3xl font-medium capitalize mb-8 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-700 from-neutral-950 to-neutral-400 bg-opacity-50'
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    >
        {children}
    </motion.div>
  )
}

export default SectionHeading