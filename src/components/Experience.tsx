import React from "react";
import { WorkExperience } from "./WorkExperience";
import SectionHeading from "./section-heading";
import BlurFade from "./ui/blur-fade";

function Experience() {
  return (
    <section
      className="mt-8 md px-5 md:px-0 max-w-[45.3rem] scroll-mt-16 leading-8"
      id="experience"
    >
      <BlurFade delay={0.04 * 5}>
        <SectionHeading>Work Experience</SectionHeading>
        </BlurFade>
        <BlurFade delay={0.04 * 6}>
        <WorkExperience/>
        </BlurFade>
    </section>
  );
}

export default Experience;
