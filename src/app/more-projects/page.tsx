import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

function page() {
  return (
    <div className=" flex min-h-screen flex-col gap-5 items-center justify-center">
      <h2 className=" TextClr font-bold sm:text-3xl text-2xl text-center">
        This section is under developement.
      </h2>
      <h2 className=" TextClr font-medium sm:text-lg text-xs text-center">
        or you can find more projects on my github !
      </h2>
      <div className=" flex flex-row gap-5 mt-5">
        <Link
          href="/"
          className="px-2 py-1.5 rounded-lg border border-black dark:border-white/95 dark:text-white/95 text-black flex flex-row items-center justify-center gap-1 text-sm font-medium"
        >
          
          Home
        </Link>
        <Link
        target="_blank"
          href="https://github.com/Adil0710"
          className="px-2 py-1.5 rounded-lg bg-black/85 dark:bg-white/95 dark:text-black text-white flex flex-row items-center justify-center gap-1 text-sm font-medium"
        >
          <FaGithub className="text-base" /> Github
        </Link>
      </div>
    </div>
  );
}

export default page;
