import inward from "../../public/inward.png";
import memories from "../../public/memories.png";
import freescribe from "../../public/freescribe.png";
import pinterest from "../../public/pinterest.png";
import profilecraft from "../../public/profilecraft.png";
import { divider, image } from "@nextui-org/theme";
// data/links.js
import { Github, Linkedin, Instagram } from "lucide-react";

import { BsThreads } from "react-icons/bs";
import { ComponentType, SVGProps } from "react";
import steam from "@/components/steam";
import X from "@/components/X";

interface LinkSocial {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  outline?: boolean;
}

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Php",
//   "C#",
//   "MongoDB",
//   "MySQL",
//   "Redux",
//   "Git",
//   "Tailwind",
//   "Framer Motion",
//   "Locomotive.js",
//   "GSAP",
// ] as const;

export const projectData = [
  {
    title: "Profilecraft",
    description:
      "Built a full-stack app with OTP and Google OAuth, enabling shareable profiles. Designed a responsive Bento-style UI with smooth animations for a modern experience.",
    visit: "https://profilecraft.vercel.app/",
    github: "https://github.com/Adil0710/ProfileCraft",
    image: profilecraft,
    tech: [
      "Next.js",
      "Typescript",
      "React.js",
      "Nextauth.js",
      "MongoDB",
      "Tailwind",

      "Shadcn",
    ],
  },
  {
    title: "Memories",
    description:
      "Built a MERN stack web app for managing notes with JWT authentication, CRUD operations, note downloads and a modern UI/UX using React, Tailwind, AntD, and advanced animations.",
    visit: "https://memories-note-app.vercel.app/",
    github: "https://github.com/Adil0710/Memories-a-note-app",
    image: memories,
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Locomotive.js",
      "GSAP",
      "Ant Design",
    ],
  },
  {
    title: "FreeScribe",
    description: `Developed a React.js web app for real-time MP3 transcription and translation using web workers for efficient in-browser ML. Features include text copying and download options.`,
    visit: "https://freescribe.vercel.app/",
    github: "https://github.com/Adil0710/FreeScribe",
    image: freescribe,
    tech: ["React.js", "Tailwind", "Machine Learning", "Web Workers"],
  },
  {
    title: "Pinterest Clone",
    description:
      "Built a full-stack web app with Node.js, Express.js, MongoDB & EJS, featuring Passport.js authentication, profile management, feed, post creation & deletion.",
    visit: "https://pinterest-clone-jyqc.onrender.com/",
    github: "https://github.com/Adil0710/Pinterest-Clone",
    image: pinterest,
    tech: ["EJS", "Node.js", "Express.js", "MongoDB", "Passport.js", "Multer"],
  },
  {
    title: "Inward Outward System",
    description:
      "Created a desktop app for efficient letter tracking with SAP Crystal Reports, offering a centralized solution for managing sent and received correspondence.",
    visit: "no",
    github: "https://github.com/Adil0710/Inward-Outward-System",
    image: inward,
    tech: [
      "C#",
      "MS SQL Server",
      "SAP Crystal Report",
      "Visual Studio"
    ],
  },
] as const;

export const linksSocial: LinkSocial[] = [
  {
    href: "https://github.com/Adil0710",
    label: "GitHub",
    icon: Github,
    outline: false,
  },
  {
    href: "https://www.linkedin.com/in/adil-patel-737692252/",
    label: "LinkedIn",
    icon: Linkedin,
    outline: false,
  },
  {
    href: "https://x.com/AdilPat21587273",
    label: "Twitter",
    icon: X,
    outline: true,
  },
  {
    href: "https://www.instagram.com/code_with_adil/",
    label: "Instagram",
    icon: Instagram,
    outline: false,
  },
  {
    href: "https://www.threads.net/@the_lonewolf_02_",
    label: "Threads",
    icon: BsThreads,
    outline: false,
  },
  {
    href: "https://steamcommunity.com/id/ambadas/",
    label: "Steam",
    icon: steam,
    outline: false,
  },
];
