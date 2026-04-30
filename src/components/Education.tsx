import React from "react";
import SectionHeading from "./section-heading";
import BlurFade from "./ui/blur-fade";
import { EducationData } from "./EducationData";

function Experience() {
  return (
    <section
      className=" md px-5 md:px-0 max-w-[45.3rem] scroll-mt-16 leading-8"
      id="education"
    >
      <BlurFade delay={0.04 * 9}>
        <SectionHeading>Education</SectionHeading>
        </BlurFade>
        <BlurFade delay={0.04 * 10}>
        <EducationData/>
        </BlurFade>
    </section>
  );
}

export default Experience;
