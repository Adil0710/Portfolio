"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section 
      className=' mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial ={{opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{delay: 0.175}}
    >
        <SectionHeading>About Me</SectionHeading>

        <p className='mb-3 text-gray-800 dark:text-gray-300'>
           I&apos;m a passionate <span className='font-bold'>full-stack developer</span> with almost 1 year of experience and a strong foundation in building web applications using technologies like React, Node.js, and MongoDB. I have hands-on experience developing interactive, high-performance applications for companies such as MountainHigh Solutions and ArrowTech Technologies, where I successfully reduced latency and enhanced user experience. I enjoy creating efficient, user-friendly solutions, and I am skilled in both front-end and back-end development.
        </p>

        <p className='text-gray-800 dark:text-gray-300'>
          I love sharing my knowledge through teaching and mentoring others in tech. When I&apos;m not coding, you can often find me enjoying video games.
        </p>

    </motion.section>
  )
}

export default About