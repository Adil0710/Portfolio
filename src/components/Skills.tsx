"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index : number) => ({
    opacity: 1,
    y: 0,
    transition : {
      delay: 0.05 * index,
    }
  }),
}

function Skills() {
  return (
    <section className=' mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-5 lg:px-0 md:px-5' id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className=' flex flex-wrap justify-center gap-2 text-black/90 dark:text-white/75'>
            {
                skillsData.map((skill, index) => (
                    <motion.li className=' BorderAndBg rounded-xl px-5 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    viewport={{
                      once : true
                    }}
                    custom={index}
                    >
                      {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Skills