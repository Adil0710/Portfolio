import React from "react";
import SectionHeading from "./section-heading";
import { ThreeDCardDemo } from "./ThreeDCard";

function Project() {
  return (
    <section
      className=" mt-12 max-w-[43.5rem] scroll-mt-16 px-5 lg:px-0 md:px-5"
      id="projects"
    >
       <SectionHeading>Projects</SectionHeading>

      <ThreeDCardDemo />
    </section>
  );
}

export default Project;
