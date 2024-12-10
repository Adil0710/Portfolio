import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import adil from "../../public/adil2.jpg";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";

function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const words = ["Full-Stack dev.", "MERN stack dev.", "Front-End dev."];

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
    <div className="flex items-center justify-center z-10 w-full flex-col sm:mt-48 mt-14">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="relative"
      >
        <Image
          onClick={toggleModal}
          src={adil}
          alt="adil"
          priority={true}
          width={192}
          height={192}
          quality={95}
          className="sm:h-40 sm:w-40 cursor-pointer h-36 w-36 rounded-full object-cover custom-object-position border-[0.30rem] z-10 border-white sm:mb-10"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ rotate: 10 }} // Rotate the hand by 6 degrees on hover
          transition={{
            opacity: {
              type: "spring",
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
            },
            scale: {
              type: "spring",
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
            },
            
          }}
          className="absolute sm:right-2 sm:bottom-12 text-3xl bottom-1 right-2 sm:text-4xl cursor-pointer "
        >
          👋
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <div className="p-4 max-w-7xl mx-auto relative z-10 text-center w-full lg:pt-5 pt-14 md:pt-0">
          <h1 className="lg:text-6xl lg:leading-[1] md:text-4xl md:leading-[1] text-[27px] leading-[1.5] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-700 from-neutral-950 to-neutral-300 bg-opacity-50">
            Hey, It&apos;s me Adil and I&apos;m a
            <br />
            <FlipWords words={words} />
          </h1>
          <HoverBorderGradientDemo />
        </div>
      </motion.div>

      {/* Modal (red div) */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 w-full h-full z-[99999] bg-[#1f1f1f] bg-opacity-75 duration-300 transition-opacity flex items-center justify-center`}
          onClick={toggleModal} // Close modal on click (optional)
        >
          <div className="">
            <Image
              src={adil}
              alt="Adil"
              width={384} // Use the actual width of the image
              height={384} // Use the actual height of the image
              quality={100}
              className="sm:h-96 sm:w-96 h-60 w-60 object-cover custom-object-position rounded-full"
              layout="fixed" // You can also use layout="responsive" based on your needs
              placeholder="blur"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Intro;
