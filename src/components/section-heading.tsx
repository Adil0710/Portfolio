'use client'
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
}

function SectionHeading({children} : SectionHeadingProps) {
  return (
    <motion.div
    className=' text-3xl font-semibold capitalize mb-8 text-black/90 dark:text-white/90'
    
    >
        {children}
    </motion.div>
  )
}

export default SectionHeading