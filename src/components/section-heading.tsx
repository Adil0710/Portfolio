'use client'
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
}

function SectionHeading({children} : SectionHeadingProps) {
  return (
    <motion.div
    className=' text-xl font-bold mb-2 text-black dark:text-white'
    
    >
        {children}
    </motion.div>
  )
}

export default SectionHeading