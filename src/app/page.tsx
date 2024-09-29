import type { NextPage } from 'next';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";



const Home: NextPage = () => {
  return (
    <main className="w-full dark:bg-black flex flex-col items-center min-h-[500vh]">
       
      <Hero />
      <SectionDivider />
      <About />
      <Skills />

    </main>
  );
};

export default Home;
