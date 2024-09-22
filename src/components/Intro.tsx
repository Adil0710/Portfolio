import React from 'react'
import {motion} from 'framer-motion'
import { FlipWords } from './ui/flip-words';
import adil from '../../public/adil2.jpg'
import Image from 'next/image';
import { HoverBorderGradientDemo } from './HoverBorderGradientDemo';

function Intro() {
    const words = ["Full-Stack dev.", "MERN stack dev.", "Front-End dev."];
  return (
    <div className=' flex items-center justify-center z-10 w-full flex-col sm:mt-64 mt-14'>
       <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              >
      <Image src={adil} alt='adil'
      priority={true}
      width={192}
      height={192}
      quality={95}
       className=" sm:h-40 sm:w-40 h-36 w-36 rounded-full object-cover custom-object-position border-[0.30rem] z-10 border-white sm:mb-10"
      />
      </motion.div>
         <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              >
                
            <div className=" p-4 max-w-7xl  mx-auto relative z-10 text-center w-full lg:pt-5 pt-14 md:pt-0">
            <h1 className="lg:text-7xl lg:leading-[1] md:text-4xl md:leading-[1] text-[27px] leading-[1.5] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-700 from-neutral-950 to-neutral-300 bg-opacity-50">
                Hey, It&apos;s me Adil and I&apos;m a<br />
                <FlipWords words={words} />
              </h1>
              <HoverBorderGradientDemo/>
            </div>
            </motion.div>
    </div>
  )
}

export default Intro