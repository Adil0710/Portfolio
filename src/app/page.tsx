"use client";
import type { NextPage } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";
import { useTheme } from "@/context/themeContext";
import Project from "@/components/Project";
import { useEffect } from "react";
import Experience from "@/components/Experience";
import  Education  from "@/components/Education";
import { Divider } from "@/components/ui/Divider";
import { Settings } from "@/components/settings";

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className=" max-w-screen overflow-x-hidden flex flex-col items-center scrollbar-hide">
      
      <Hero />
      <About />
      <Divider/>
      <Experience />
      <Divider/>
      <Education/>
      <Divider/>
      <Skills />
      <Divider/>
      <Project />
      
      <Contact />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: theme !== "light" ? "#141414" : "",
            color: theme !== "light" ? "#fff" : "",
          },
        }}
      />
      <Settings/>
    </main>
  );
};

export default Home;
