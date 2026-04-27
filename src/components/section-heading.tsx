'use client'
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
}

function SectionHeading({children} : SectionHeadingProps) {
  return (
    <motion.div
    className=' text-lg font-semibold mb-0 text-foreground/80'
    
    >
        {children}
    </motion.div>
  )
}

export default SectionHeading