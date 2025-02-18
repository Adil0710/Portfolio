import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BsFillPatchCheckFill } from "react-icons/bs";
import FIT from "../../public/FIT.png";
import MHS from "../../public/MHS.png";
import ATT from "../../public/ATT.jpg";

export function WorkExperience() {
  const data = [
    {
      title: " Full-stack Developer",
      logo: FIT,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row text-neutral-600 dark:text-neutral-400 font-medium items-center">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Furde Infotech Pvt. Ltd.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Sept 2024 - Present
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              At Furde Infotech Pvt. Ltd., developed modern, responsive websites
              and applications with admin panel dashboards and job boards,
              improving UI/UX by 22%. Built scalable web apps using React.js,
              Next.js, Node.js, TypeScript, and UI libraries like Shadcn and
              Aceternity UI, integrating MongoDB for better data management,
              which reduced admin tasks by 30% and boosted user engagement by
              14%.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: " Full-stack Developer",
      logo: MHS,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            MountainHigh Solutions Pvt. Ltd.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Feb 2024 - Jul 2024
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              Developed a Full-stack HR Management System using Node.js, React,
              and MySQL at MountainHigh Solutions Pvt. Ltd. Improved latency by
              16% and added modules for leave, attendance, and payroll, reducing
              admin tasks by 33% and increasing employee satisfaction by 25%.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Front-end Developer Intern",
      logo: ATT,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            ArrowTech Technologies Pvt. Ltd.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Aug 2023 - Jan 2024
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              At ArrowTech Technologies Pvt. Ltd., developed web applications
              with interactive and responsive design for various devices.
              Enhanced UX with React and libraries like GSAP, Locomotive.js &
              ScrollTrigger boosting engagement by 38% and reducing bounce rate
              by 13%.
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
