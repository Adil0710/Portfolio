import Image from "next/image";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGreensock,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
      name: "PostgreSQL",
      icon: (
        <div
          style={{
            backgroundColor: "#0064a515",
            borderColor: "#0064a530",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiPostgresql size={IconSize} color="#0064a5" />
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
      name: "Prisma",
      icon: (
        <div
          style={{
            backgroundColor: "#556A7B15",
            borderColor: "#556A7B30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiPrisma size={IconSize} color="#556A7B" />
        </div>
      ),
    },
    {
      name: "Supabase",
      icon: (
        <div
          style={{
            backgroundColor: "#32AD7515",
            borderColor: "#32AD7530",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiSupabase size={IconSize} color="#32AD75" />
        </div>
      ),
    },
    {
      name: "Zustand",
      icon: (
        <div
          style={{
            backgroundColor: "#2555C915",
            borderColor: "#2555C930",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <Image
            src={`/zustand.png`}
            width={IconSize}
            height={IconSize}
            alt="Zustand"
          />
        </div>
      ),
    },
    {
      name: "Docker",
      icon: (
        <div
          style={{
            backgroundColor: "#0db7ed15",
            borderColor: "#0db7ed30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiDocker size={IconSize} color="#0db7ed" />
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
            backgroundColor: "#f9ee1a10",
            borderColor: "#f9ee1a75",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${IconSize}`}
            height={`${IconSize}`}
            viewBox="0 0 300 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0 0 C0.76166473 -0.00067474 1.52332947 -0.00134949 2.30807495 -0.00204468 C13.68231924 0.01397391 24.55273892 0.48473358 35.625 3.25 C36.30127441 3.41097168 36.97754883 3.57194336 37.67431641 3.73779297 C60.66255814 9.31475863 81.89929235 20.66454808 99.625 36.25 C100.49898437 37.0028125 101.37296875 37.755625 102.2734375 38.53125 C129.36739908 62.28931841 146.22310385 96.66174898 150.625 132.25 C150.74790466 134.86507206 150.83433361 137.45490778 150.86328125 140.0703125 C150.8730751 140.80286255 150.88286896 141.5354126 150.89295959 142.29016113 C151.0629111 158.30007931 151.03532843 173.7232273 146.625 189.25 C146.41069336 190.01860352 146.19638672 190.78720703 145.97558594 191.57910156 C139.75775318 213.21933174 129.18538989 232.12533092 114.625 249.25 C113.63886719 250.41982422 113.63886719 250.41982422 112.6328125 251.61328125 C108.30364744 256.62466881 103.76413426 261.07771982 98.625 265.25 C97.20574219 266.40822266 97.20574219 266.40822266 95.7578125 267.58984375 C68.43364039 289.47477785 35.90678128 300.73922746 0.9375 300.5625 C-0.18626541 300.55976578 -0.18626541 300.55976578 -1.33273315 300.55697632 C-12.60256686 300.51083098 -23.4061054 299.98945093 -34.375 297.25 C-35.05127441 297.08902832 -35.72754883 296.92805664 -36.42431641 296.76220703 C-59.41255814 291.18524137 -80.64929235 279.83545192 -98.375 264.25 C-99.68597656 263.12078125 -99.68597656 263.12078125 -101.0234375 261.96875 C-128.11739908 238.21068159 -144.97310385 203.83825102 -149.375 168.25 C-149.49790466 165.63492794 -149.58433361 163.04509222 -149.61328125 160.4296875 C-149.62797203 159.33086243 -149.62797203 159.33086243 -149.64295959 158.20983887 C-149.8129111 142.19992069 -149.78532843 126.7767727 -145.375 111.25 C-145.16069336 110.48139648 -144.94638672 109.71279297 -144.72558594 108.92089844 C-133.75445544 70.73753159 -108.15112305 38.33635529 -73.6875 18.5625 C-50.61901657 5.8067525 -26.23115932 0.02081754 0 0 Z "
              fill="#F5EA16"
              transform="translate(149.375,-0.24999999999999997)"
            />
            <path
              d="M0 0 C2.17027685 0.08536617 4.34087604 0.16291697 6.51171875 0.23242188 C11.80656185 0.41890364 17.08927753 0.70237839 22.375 1.0625 C20.94789042 4.82202972 19.25176113 8.32237961 17.35546875 11.8671875 C16.7521875 12.99576172 16.14890625 14.12433594 15.52734375 15.28710938 C14.87262463 16.50402937 14.21767078 17.72082311 13.5625 18.9375 C13.22831055 19.56019775 12.89412109 20.18289551 12.54980469 20.82446289 C7.5938655 30.05613744 2.50786288 39.20484833 -2.69067383 48.30249023 C-7.80975532 57.29840183 -12.67964147 66.42286856 -17.51367188 75.57421875 C-18.10728516 76.693125 -18.70089844 77.81203125 -19.3125 78.96484375 C-19.83199219 79.94960693 -20.35148437 80.93437012 -20.88671875 81.94897461 C-21.74716797 83.49016968 -21.74716797 83.49016968 -22.625 85.0625 C-22.93781418 85.76589508 -23.25062836 86.46929016 -23.57292175 87.19400024 C-24.73474296 89.51912579 -25.76824351 91.23702247 -27.625 93.0625 C-31.15381694 94.16149216 -34.50922779 93.99817164 -38.17578125 93.84375 C-39.18972458 93.83243042 -40.20366791 93.82111084 -41.24833679 93.80944824 C-44.47999784 93.76473984 -47.70718558 93.66438599 -50.9375 93.5625 C-53.1307952 93.52236592 -55.3241601 93.48586503 -57.51757812 93.453125 C-62.88823936 93.36502488 -68.2563002 93.23124792 -73.625 93.0625 C-72.1768455 89.23605051 -70.43488022 85.68546442 -68.5 82.08203125 C-67.88108887 80.92735352 -67.26217773 79.77267578 -66.62451172 78.58300781 C-65.95815882 77.34692379 -65.29165156 76.11092297 -64.625 74.875 C-63.93888804 73.5986741 -63.25285345 72.3223066 -62.56689453 71.04589844 C-58.54687595 63.57566421 -54.48138434 56.13229843 -50.33398438 48.73193359 C-48.01256869 44.58340697 -45.72963038 40.41657414 -43.4765625 36.23046875 C-42.64342529 34.68311035 -42.64342529 34.68311035 -41.79345703 33.10449219 C-40.73166518 31.12881978 -39.67245636 29.15175537 -38.61669922 27.17285156 C-37.57777208 25.24022723 -36.50924556 23.3232958 -35.41552734 21.42114258 C-34.01686271 18.79754981 -32.91092567 16.31811371 -31.82275391 13.5690918 C-25.13326441 -1.92896677 -15.50266812 -1.05994111 0 0 Z "
              fill="#000"
              transform="translate(150.625,102.9375)"
            />
            <path
              d="M0 0 C-1.20193919 3.09660675 -2.4845178 6.07256619 -4.03125 9.01171875 C-4.42417236 9.7596167 -4.81709473 10.50751465 -5.22192383 11.27807617 C-5.64368896 12.07318604 -6.0654541 12.8682959 -6.5 13.6875 C-7.1664856 14.94880737 -7.1664856 14.94880737 -7.84643555 16.2355957 C-11.1667148 22.49252695 -14.57800626 28.69472341 -18.03710938 34.87573242 C-21.58266195 41.21950413 -25.04726119 47.60531234 -28.5 54 C-32.47225424 61.3487577 -36.45520024 68.6908672 -40.5 76 C-40.88478516 76.69867188 -41.26957031 77.39734375 -41.66601562 78.1171875 C-42.37556681 79.39462816 -43.09780091 80.66516634 -43.83662415 81.92590332 C-45.02584898 83.9727216 -45.02584898 83.9727216 -45.9394989 86.10095215 C-47.09286932 88.42201259 -48.16906053 90.15610288 -50 92 C-53.52492083 93.10943126 -56.88520281 92.93563057 -60.55078125 92.78125 C-61.56472458 92.76993042 -62.57866791 92.75861084 -63.62333679 92.74694824 C-66.85499784 92.70223984 -70.08218558 92.60188599 -73.3125 92.5 C-75.5057952 92.45986592 -77.6991601 92.42336503 -79.89257812 92.390625 C-85.26323936 92.30252488 -90.6313002 92.16874792 -96 92 C-91.07980781 82.0657525 -86.06305347 72.20218407 -80.8125 62.4375 C-80.49628693 61.84825745 -80.18007385 61.25901489 -79.85427856 60.6519165 C-50.84898027 6.63394476 -50.84898027 6.63394476 -33.92578125 0.67236328 C-23.12853232 -1.80891372 -10.96421878 -0.53705668 0 0 Z "
              fill="#000"
              transform="translate(118,104)"
            />
            <path
              d="M0 0 C1.92571706 0.00094792 3.85159985 0.03473519 5.77636719 0.09521484 C6.79172546 0.10370453 7.80708374 0.11219421 8.85321045 0.12094116 C12.0943032 0.15451227 15.33290232 0.22980172 18.57324219 0.30615234 C20.77112291 0.336247 22.96904265 0.36362367 25.16699219 0.38818359 C30.55325878 0.45431508 35.93807236 0.55469997 41.32324219 0.68115234 C36.73317753 9.94683807 32.08825189 19.16471314 27.13574219 28.24365234 C26.58893799 29.24960449 26.04213379 30.25555664 25.47875977 31.29199219 C20.50008288 40.41921112 15.41214098 49.48301698 10.25292969 58.50927734 C8.47735903 61.62021329 6.74394691 64.74300486 5.08105469 67.91552734 C-1.84011463 80.99619807 -10.70669209 88.02446377 -24.67675781 92.68115234 C-26.96060951 92.76493862 -29.24685882 92.7884515 -31.53222656 92.77880859 C-32.52468132 92.77668617 -32.52468132 92.77668617 -33.53718567 92.77452087 C-35.64625609 92.7689323 -37.75521958 92.75638199 -39.86425781 92.74365234 C-41.2958969 92.73863586 -42.72753766 92.73407321 -44.15917969 92.72998047 C-47.6650737 92.71896665 -51.17090531 92.70170989 -54.67675781 92.68115234 C-53.49268299 88.87414434 -52.16922066 85.49280843 -50.16503906 82.04833984 C-49.41130005 80.73808838 -49.41130005 80.73808838 -48.64233398 79.40136719 C-48.09681885 78.46244629 -47.55130371 77.52352539 -46.98925781 76.55615234 C-41.96766437 67.79741174 -37.10545427 58.96970193 -32.36425781 50.05615234 C-27.31598085 40.58137257 -22.22371908 31.13306314 -17.04678345 21.72784424 C-16.3496717 20.46108157 -15.6535025 19.19379969 -14.95834351 17.92596436 C-13.98841908 16.15790153 -13.01430321 14.39214004 -12.04003906 12.62646484 C-11.48614502 11.62115723 -10.93225098 10.61584961 -10.36157227 9.58007812 C-9.8055835 8.62343262 -9.24959473 7.66678711 -8.67675781 6.68115234 C-7.90609985 5.03034668 -7.90609985 5.03034668 -7.11987305 3.34619141 C-4.35977423 0.3353751 -3.87549994 0.25574896 0 0 Z "
              fill="#000"
              transform="translate(186.6767578125,103.31884765625)"
            />
            <path
              d="M0 0 C5.34896773 2.78264314 8.95758565 6.67902418 11.1953125 12.265625 C12.83145276 18.25006596 13.34754319 24.98498054 11.15234375 30.8828125 C7.17516451 37.60948865 1.52556719 42.03413938 -5.9375 44.4375 C-13.6649308 45.45573547 -19.67155644 43.5507576 -26.125 39.375 C-31.42162526 34.5137138 -34.20325605 27.99002595 -34.5625 20.875 C-34.21742646 14.27197109 -31.74343688 9.35617542 -27.1875 4.6171875 C-19.33907981 -2.38549776 -10.0354328 -3.97662558 0 0 Z "
              fill="#000"
              transform="translate(265.9375,105.5625)"
            />
          </svg>
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
          <SiGreensock size={IconSize} color="#5b8015" />
        </div>
      ),
    },

    // Add more skills here...
  ];
};
