import {
  SiExpress,
  SiGit,
  SiGreensock,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import framer from "../../public/framer.png";
import Image from "next/image";

interface Skill {
  name: string;
  icon: JSX.Element; // Use JSX.Element for React elements like SVG
}

const IconSize = 25;

export const SkillsData = (): Skill[] => {
  return [
    {
      name: "TypeScript",
      icon: (
        <div
          style={{
            backgroundColor: "#3178c616",
            borderColor: "#3178c630",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiTypescript size={IconSize} color="#3178c6" />
        </div>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <div
          style={{
            backgroundColor: "#5f5f5f16",
            borderColor: "#5f5f5f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiNextdotjs size={IconSize} />
        </div>
      ),
    },
    {
      name: "React",
      icon: (
        <div
          style={{
            backgroundColor: "#61dcfb10",
            borderColor: "#61dcfb30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiReact size={IconSize} color="#61dafb" />
        </div>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <div
          style={{
            backgroundColor: "#3c873a15",
            borderColor: "#3c873a30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiNodedotjs size={IconSize} color="#3c873a" />
        </div>
      ),
    },
    {
      name: "Express",
      icon: (
        <div
          style={{
            backgroundColor: "#5f5f5f16",
            borderColor: "#5f5f5f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiExpress size={IconSize} />
        </div>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div
          style={{
            backgroundColor: "#f7de1e16",
            borderColor: "#f7de1e50",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiJavascript size={IconSize} color="#f7de1e" />
        </div>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <div
          style={{
            backgroundColor: "#00684b15",
            borderColor: "#00684b30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiMongodb size={IconSize} color="#00684a" />
        </div>
      ),
    },
    {
        name: "MySQL",
        icon: (
          <div
            style={{
              backgroundColor: "#00758f15",
              borderColor: "#00758f30",
              borderRadius: "0.25rem", // equivalent to rounded-sm
              borderWidth: "1px",
            }}
            className="flex items-center opacity-15 justify-center px-2 py-1.5"
          >
            <SiMysql size={IconSize} color="#00758f" />
          </div>
        ),
      },
      {
        name: "Git",
        icon: (
          <div
            style={{
              backgroundColor: "#f14f2f15",
              borderColor: "#f14f2f30",
              borderRadius: "0.25rem", // equivalent to rounded-sm
              borderWidth: "1px",
            }}
            className="flex items-center opacity-15 justify-center px-2 py-1.5"
          >
            <SiGit size={IconSize} color="#F1502F" />
          </div>
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <div
            style={{
              backgroundColor: "#37bbf815",
              borderColor: "#37bbf830",
              borderRadius: "0.25rem", // equivalent to rounded-sm
              borderWidth: "1px",
            }}
            className="flex items-center opacity-15 justify-center px-2 py-1.5 bg-[#37bbf86e]"
          >
            <SiTailwindcss size={IconSize} color="#37BCF8" />
          </div>
        ),
      },
      {
        name: "Motion",
        icon: (
          <div
            style={{
              backgroundColor: "#0d63f815",
              borderColor: "#0d63f830",
              borderRadius: "0.25rem", // equivalent to rounded-sm
              borderWidth: "1px",
            }}
            className="flex items-center opacity-15 justify-center px-2 py-1.5"
          >
            <Image src={framer} alt="Framer Motion" width={IconSize} height={IconSize} />
          </div>
        ),
      },
      {
        name: "GSAP",
        icon: (
          <div
            style={{
              backgroundColor: "#496a0b15",
              borderColor: "#496a0b30",
              borderRadius: "0.25rem", // equivalent to rounded-sm
              borderWidth: "1px",
            }}
            className="flex items-center opacity-15 justify-center px-2 py-1.5 bg-[#5b8015]"
          >
            <SiGreensock size={IconSize} color="#5b8015"/>
          </div>
        ),
      },

    // Add more skills here...
  ];
};
