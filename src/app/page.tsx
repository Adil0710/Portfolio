import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-[500vh]">
     <Hero/>
     <SectionDivider/>
     <About/>
     {/* <Projects/> */}
    </main>
  );
}
