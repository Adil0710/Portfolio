import React from "react";
import { TimelineDemo } from "./Timeline";
import SectionHeading from "./section-heading";

function Experience() {
  return (
    <section
      className=" mb-12 max-w-[50rem] scroll-mt-16 text-center leading-8"
      id="experience"
    >
        <SectionHeading>Experience</SectionHeading>
        <TimelineDemo/>
    </section>
  );
}

export default Experience;
