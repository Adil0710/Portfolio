'use client'
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
}

function SectionHeading({children} : SectionHeadingProps) {
  return (
    <motion.div
    className=' text-3xl font-medium capitalize mb-8 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-700 from-neutral-950 to-neutral-400 bg-opacity-50'
    
    >
        {children}
    </motion.div>
  )
}

export default SectionHeading