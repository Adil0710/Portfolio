import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

function Skills() {
  return (
    <section className=' mb-28 max-w-[52rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className=' flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-gray-300'>
            {
                skillsData.map((skill, index) => (
                    <li className=' bg-gray-100 dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.1] rounded-xl px-5 py-3' key={index}>{skill}</li>
                ))
            }
        </ul>
    </section>
  )
}

export default Skills