import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BsFillPatchCheckFill, BsPatchCheckFill } from "react-icons/bs";

export function TimelineDemo() {
  const data = [
    {
      title: "Sept 2024 - Present",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Full-stack Developer
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
              At Furde Infotech Pvt. Ltd. developing modern, responsive
              websites and scalable web applications using React, Next.js,
              TypeScript, and UI libraries like Shadcn, Aceternity UI, and Ant
              Design.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2024 - Jul 2024",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Full-stack Developer
          </p>
          <div className="mb-8">
            <div className="flex gap-2 leading-normal items-center text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
              Developed a full-stack HR Management System using Node.js, React,
              and MySQL at MountainHigh Solutions Pvt. Ltd. Improved latency by
              16% and added modules for leave, attendance, and payroll, reducing
              admin tasks by 33% and increasing employee satisfaction by 25%.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2024 - Jul 2024",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Front-end Developer Intern
          </p>
          <div className="mb-8">
            <div className="flex gap-2 leading-normal items-center text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
              At ArrowTech Technologies Pvt. Ltd., developed web applications
              with interactive and responsive design for various devices.
              Enhanced UX with React and libraries like GSAP, LocomotiveJS &
              ScrollTrigger boosting engagement by 39% and reducing bounce rate
              by 13%.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2022 - Jul 2024",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            MCA
          </p>
          <div className="mb-8">
            <div className="flex gap-2 leading-normal items-center text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
              During my MCA at Bharati Vidyapeeth, I deepened my coding skills,
              tackling advanced concepts & real-world projects that fueled my
              passion for software development.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2019 - Jul 2022",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            BCA
          </p>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-left leading-normal text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
              My coding journey began during my BCA at Bharati Vidyapeeth, where
              I discovered the thrill of turning ideas into reality through
              code, sparking a passion that drives me today.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full -mt-8 sm:mt-5">
      <Timeline data={data} />
    </div>
  );
}
