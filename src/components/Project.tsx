import React from "react";
import SectionHeading from "./section-heading";
import { ThreeDCardDemo } from "./ThreeDCard";

function Project() {
  return (
    <section
      className=" mb-12 max-w-[50rem] scroll-mt-16 text-center leading-8 px-5 lg:px-0 md:px-5"
      id="projects"
    >
      <h1 className=' text-3xl font-semibold capitalize -mb-10 sm:mb-0 text-black/90 dark:text-white/90'>Projects</h1>

      <ThreeDCardDemo />
    </section>
  );
}

export default Project;
