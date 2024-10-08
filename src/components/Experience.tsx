import React from "react";
import { TimelineDemo } from "./Timeline";
import SectionHeading from "./section-heading";

function Experience() {
  return (
    <section
      className=" mb-12 max-w-[51rem] scroll-mt-16 text-center leading-8"
      id="projects"
    >
        <SectionHeading>Experience</SectionHeading>
        <TimelineDemo/>
    </section>
  );
}

export default Experience;