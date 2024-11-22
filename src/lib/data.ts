import inward from '../../public/inward.png'
import memories from '../../public/memories.png'
import freescribe from '../../public/freescribe.png'
import pinterest from '../../public/pinterest.png'
import { image } from '@nextui-org/theme';
// data/links.js
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { BsThreads } from 'react-icons/bs';
import { ComponentType, SVGProps } from 'react';
import steam from '@/components/steam';

interface LinkSocial {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  outline?: boolean;
}
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Php",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Redux",
  "Zustand",
  "Java (basic)",
  "Python",
  "C#",
  "Django",
  "Framer Motion",
  "Locomotive.js",
  "GSAP",
  "GitHub",
] as const;


export const projectData = [
  {
    title: "Memories",
    description:
      "Developed a fullstack web application built with the MERN stack using RESTful APIs for managing notes. Features include user authentication with JWT, CRUD operations for notes, and note downloads in text format. The app incorporates modern UI/UX with React.js, Tailwind CSS, Ant Design, GSAP, ScrollTrigger, Locomotive.js, and React Router for routing.",
    visit: "https://memories-note-app.vercel.app/",
    github: "https://github.com/Adil0710/Memories-a-note-app",
    image: memories
  },
  {
    title: "FreeScribe",
    description:
      `Developed a web app built with React.js where user can record or upload MP3 file for real-time transcription and translation it various languages utilizing web workers to run machine learning models efficiently in the browser. The app provides convienient options to copy transcribed or translated text or download it in text format.`,
    visit: "https://freescribe.vercel.app/",
    github: "https://github.com/Adil0710/FreeScribe",
    image: freescribe
  },
  {
    title: "Pinterest Clone",
    description:
      "Developed a full-stack web application using Node.js, Express.js, MongoDB and EJS. Web application featuring secure user authentication with Passport.js, profile management, post creation, feed for discovering content & post deletion for user control.",
    visit: "https://pinterest-clone-jyqc.onrender.com/",
    github: "https://github.com/Adil0710/Pinterest-Clone",
    image: pinterest
  },
  {
    title: "Inward Outward System",
    description:
      "Developed a desktop app for the college to efficiently track the sent & received letters Using SAP Crystal Report. A single application providing a centralized solution for managing essential letter related-activities.",
    visit: "no",
    github: "https://github.com/Adil0710/Inward-Outward-System",
    image: inward
  },
] as const;



export const linksSocial:LinkSocial[] = [
  { href: 'https://github.com/Adil0710', label: 'GitHub', icon: Github, outline: false },
  { href: 'https://www.linkedin.com/in/adil-patel-737692252/', label: 'LinkedIn', icon: Linkedin, outline: false },
  { href: 'https://x.com/AdilPat21587273', label: 'Twitter', icon: Twitter, outline: false },
  { href: 'https://www.instagram.com/code_with_adil/', label: 'Instagram', icon: Instagram, outline: false },
  { href: 'https://www.threads.net/@the_lonewolf_02_', label: 'Threads', icon: BsThreads, outline: false },
  { href: 'https://steamcommunity.com/id/ambadas/', label: 'Steam', icon: steam, outline: false },
];
