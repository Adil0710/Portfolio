import React from "react";
import SectionHeading from "./section-heading";
import { ThreeDCardDemo } from "./ThreeDCard";

function Project() {
  return (
    <section
      className=" mt-12 max-w-[45.3rem] scroll-mt-16 px-5 lg:px-0 md:px-5 scrollbar-hide"
      id="projects"
    >
       <SectionHeading>Projects</SectionHeading>

      <ThreeDCardDemo />
    </section>
  );
}

export default Project;
