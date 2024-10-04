import React from 'react'
import SectionHeading from './section-heading'
import { ThreeDCardDemo } from './ThreeDCard'

function Project() {
  return (
    <section className=" mb-12 max-w-[50rem] scroll-mt-52 text-center leading-8 px-5 lg:px-0 md:px-5" id='projects'>
        <SectionHeading>Projects</SectionHeading>
        
        <ThreeDCardDemo/>
        
        
    </section>
  )
}

export default Project