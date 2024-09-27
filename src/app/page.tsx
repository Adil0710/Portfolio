import type { NextPage } from 'next';
import Hero from "@/components/Hero";
import About from "@/components/About";

import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import CalendlyWidget from '@/components/CalendlyWidget';

const Home: NextPage = () => {
  return (
    <main className="w-full flex flex-col items-center min-h-[500vh]">
       
      <Hero />
      <SectionDivider />
      <About />
      <CalendlyWidget/>
      <Skills />
    </main>
  );
};

export default Home;
