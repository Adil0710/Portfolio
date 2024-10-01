import type { NextPage } from 'next';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Contact from '@/components/Contact';



const Home: NextPage = () => {
  return (
    <main className="w-full dark:bg-black flex flex-col items-center">
       
      <Hero />
      <SectionDivider />
      <About />
      <Skills />
      <Contact/>
    </main>
  );
};

export default Home;
