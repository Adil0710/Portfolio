import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import adil from "../../public/adil2.jpg";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import { Separator } from "./ui/separator";
import { SocialLinks } from "./SocialLinks";
import BlurFade from "./ui/blur-fade";
import { XIcon } from "lucide-react";
import { introData } from "@/lib/introData";

function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  // Function to close modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled on unmount
    };
  }, [isModalOpen]);

  return (
    <div className=" z-10 w-full flex-col sm:mt-14  mt-5">
      <AnimatePresence>
        <div className="md:px-0 px-5 py-4 max-w-[45rem] mx-auto relative z-10 flex items-center justify-between lg:pt-5 pt-14 md:pt-0">
          <div className=" flex flex-col justify-center space-y-2 w-[60%]">
            <div className=" flex flex-row items-center md:gap-5 gap-2">
              <BlurFade delay={0.04}>
                <h1 className=" text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-white">
                  Hi, I&apos;m {introData.name}{" "}
                </h1>
              </BlurFade>
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ rotate: 10 }} // Rotate on hover
                transition={{
                  opacity: {
                    type: "spring",
                    stiffness: 150,
                    duration: 0.8,
                    delay: 0.2,
                  },
                  scale: {
                    type: "spring",
                    stiffness: 150,
                    duration: 0.8,
                    delay: 0.2,
                  },
                }}
                className="cursor-pointer z-20 -mt-4 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                👋
              </motion.h1>
            </div>
            <BlurFade delay={0.04}>
              <div className="">
                <p className=" md:text-xl dark:text-white/90">
                  {" "}
                  {introData.role}{" "}
                </p>
                <p className=" md:text-base mt-1.5 text-sm dark:text-neutral-400 text-neutral-600">
                  {" "}
                  📍 {introData.location}{" "}
                </p>
                <div className=" flex flex-row mt-4 items-center justify-start">
                  <HoverBorderGradientDemo />
                  <Separator
                    orientation="vertical"
                    className=" h-8 md:mr-5 md:ml-5 mr-2 ml-2"
                  />
                  <SocialLinks />
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.04}>
            <Image
              onClick={toggleModal}
              src={adil}
              alt="adil"
              priority={true}
              width={192}
              height={192}
              quality={95}
              placeholder="blur"
              className="sm:h-40 sm:w-40 cursor-pointer h-32 w-32 rounded-full object-cover custom-object-position z-10 border-neutral-200 border"
            />
          </BlurFade>
        </div>

        {/* Modal (red div) */}
        {isModalOpen && (
          <div
            className={`fixed inset-0 w-full h-full z-[99999] bg-[#1f1f1f] backdrop-blur-sm bg-opacity-75 duration-300 transition-opacity flex items-center justify-center`}
            onClick={toggleModal} // Close modal on click (optional)
          >
            <XIcon
              size={30}
              className="absolute right-8 top-5 cursor-pointer"
              onClick={toggleModal}
            />
            <div className="">
              <Image
                src={adil}
                alt="Adil"
                width={384} // Use the actual width of the image
                height={384} // Use the actual height of the image
                quality={100}
                className="sm:h-96 sm:w-96 h-60 w-60 object-cover custom-object-position rounded-full border-2 border-neutral-200"
                layout="fixed" // You can also use layout="responsive" based on your needs
                placeholder="blur"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Intro;
