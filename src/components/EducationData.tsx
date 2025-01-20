import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BsFillPatchCheckFill } from "react-icons/bs";
import BVU from "../../public/BVU.png";

export function EducationData() {
  const data = [
    {
      title: "M.C.A.",
      logo: BVU,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Bharati Vidyapeeth University.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Jul 2022 - Jul 2024
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              During my MCA at Bharati Vidyapeeth, I deepened my coding skills,
              tackling advanced concepts & real-world projects that fueled my
              passion for software development.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "B.C.A.",
      logo: BVU,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Bharati Vidyapeeth University.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Jul 2019 - Jul 2022
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
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
    <div className="w-full mt-5">
      <Timeline data={data} />
    </div>
  );
}

// {
//   title: "Feb 2024 - Jul 2024",
//   content: (
//     <div>
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
//         <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
//         Full-stack Developer
//       </p>
//       <div className="mb-8">
//         <div className="flex gap-2 leading-normal items-center text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
//           Developed a Full-stack HR Management System using Node.js, React,
//           and MySQL at MountainHigh Solutions Pvt. Ltd. Improved latency by
//           16% and added modules for leave, attendance, and payroll, reducing
//           admin tasks by 33% and increasing employee satisfaction by 25%.
//         </div>
//       </div>
//     </div>
//   ),
// },
// {
//   title: "Aug 2023 - Jan 2024",
//   content: (
//     <div>
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
//         <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
//         Front-end Developer Intern
//       </p>
//       <div className="mb-8">
//         <div className="flex gap-2 leading-normal items-center text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
//           At ArrowTech Technologies Pvt. Ltd., developed web applications
//           with interactive and responsive design for various devices.
//           Enhanced UX with React and libraries like GSAP, Locomotive.js &
//           ScrollTrigger boosting engagement by 38% and reducing bounce rate
//           by 13%.
//         </div>
//       </div>
//     </div>
//   ),
// },
// {
//   title: "Jul 2022 - Jul 2024",
//   content: (
//     <div>
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
//         <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
//         MCA
//       </p>
//       <div className="mb-8">
//         <div className="flex gap-2 leading-normal items-center text-left text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
//           During my MCA at Bharati Vidyapeeth, I deepened my coding skills,
//           tackling advanced concepts & real-world projects that fueled my
//           passion for software development.
//         </div>
//       </div>
//     </div>
//   ),
// },
// {
//   title: "Jul 2019 - Jul 2022",
//   content: (
//     <div>
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm font-bold flex flex-row items-center text-left w-full mb-4">
//         <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
//         BCA
//       </p>

//       <div className="mb-8">
//         <div className="flex gap-2 items-center text-left leading-normal text-neutral-600 font-medium dark:text-neutral-400 text-xs md:text-sm">
//           My coding journey began during my BCA at Bharati Vidyapeeth, where
//           I discovered the thrill of turning ideas into reality through
//           code, sparking a passion that drives me today.
//         </div>
//       </div>
//     </div>
//   ),
// },
