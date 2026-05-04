import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import adil from "../../public/adilw.webp";
import adil1 from "../../public/adilc.webp";
import adil2 from "../../public/adilg.webp";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import { Separator } from "./ui/separator";
import { SocialLinks } from "./SocialLinks";
import BlurFade from "./ui/blur-fade";
import { XIcon } from "lucide-react";
import { introData } from "@/lib/introData";
import MapHeroCard from "./MapHeroCard";

const slideImages = [adil, adil1, adil2];
const AUTO_DURATION = 5;
const HOVER_DURATION = 2;
const BLUR_MS = 500;
const R = 50;
const C = 2 * Math.PI * R;

function Intro() {
  const [imgIdx, setImgIdx] = useState(0);
  const [isBlurring, setIsBlurring] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [ringKey, setRingKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hovRef = useRef(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const advanceImage = useCallback(() => {
    setIsBlurring(true);
    setTimeout(() => {
      setImgIdx((p) => (p + 1) % slideImages.length);
      setIsBlurring(false);
      if (hovRef.current) setRingKey((p) => p + 1);
    }, BLUR_MS);
  }, []);

  // Auto-cycle every 5s when NOT hovered
  useEffect(() => {
    if (isHovered || isModalOpen) return;
    const t = setTimeout(advanceImage, AUTO_DURATION * 1000);
    return () => clearTimeout(t);
  }, [imgIdx, isHovered, isModalOpen, advanceImage]);

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isModalOpen]);

  return (
    <div className=" z-10 w-full flex-col ">
      <AnimatePresence>
        <div className="max-w-[45rem] mx-auto px-0 md:px-0">
          <BlurFade delay={0.04}>
            <MapHeroCard className="w-full h-56 mt-0" />
          </BlurFade>
        </div>
         
        <div className="md:px-0 px-5 pb-4 max-w-[45rem] mx-auto relative z-10 flex items-center justify-between pt-2 ">
          <div className=" flex flex-col justify-center space-y-2 w-[60%]">
            <div className=" flex flex-row items-center md:gap-3 gap-2">
              <BlurFade delay={0.06}>
                <h1 className=" text-xl font-bold tracking-wide sm:text-2xl xl:text-3xl/none text-foreground/80">
                  Hi, I&apos;m {introData.name}{" "}
                </h1>
              </BlurFade>
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 20, -5, 20, -5, 10, 0],
                }}
                whileHover={{
                  rotate: [0, 30, -10, 30, -10, 5, 0],
                  scale: 1.150,
                  transition: {
                    rotate: { duration: 2, ease: "easeInOut", repeatDelay: 0.5 },
                  },
                }}
                transition={{
                  opacity: { type: "spring", stiffness: 250, duration: 1, delay: 0.2 },
                  scale: { type: "spring", stiffness: 250, duration: 1, delay: 0.2 },
                  rotate: { duration: 1, ease: "easeInOut", delay: 1 },
                }}
                className="cursor-pointer z-20 -mt-4 text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none"
              >
                👋
              </motion.h1>
            </div>
            <BlurFade delay={0.06}>
              <div className="">
                <p className=" md:text-lg text-foreground/70">
                  {" "}{introData.role}{" "}
                </p>
                <p className=" md:text-base mt-1.5 text-sm text-foreground/70">
                  {" "}📍 {introData.location}{" "}
                </p>
                <div className=" flex flex-row mt-4 items-center justify-start">
                  <HoverBorderGradientDemo />
                  <Separator orientation="vertical" className=" h-8 md:mr-5 md:ml-5 mr-2 ml-2" />
                  <SocialLinks />
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.06}>
            <motion.div
              layoutId="image-card"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div
                className="relative sm:h-40 sm:w-40 h-32 w-32 rounded-full"
                onMouseEnter={() => { setIsHovered(true); hovRef.current = true; setRingKey((p) => p + 1); }}
                onMouseLeave={() => { setIsHovered(false); hovRef.current = false; }}
              >
                {/* SVG Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 z-20 pointer-events-none" viewBox="0 0 100 100" overflow="visible">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  {/* Border track */}
                  <circle cx="50" cy="50" r={R} fill="none" className="stroke-neutral-200 dark:stroke-neutral-700" strokeWidth="1.5" />
                  {/* Gradient progress – only on hover */}
                  {isHovered && (
                    <motion.circle
                      key={ringKey}
                      cx="50" cy="50" r={R}
                      fill="none"
                      stroke="url(#ringGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={C}
                      initial={{ strokeDashoffset: C, opacity: 0 }}
                      animate={{ strokeDashoffset: 0, opacity: 1 }}
                      transition={{
                        strokeDashoffset: { duration: HOVER_DURATION, ease: "linear" },
                        opacity: { duration: 0.25 },
                      }}
                      onAnimationComplete={() => { if (hovRef.current) advanceImage(); }}
                      style={{ filter: "drop-shadow(0 0 4px rgba(6,182,212,0.5))" }}
                    />
                  )}
                </svg>

                {/* Grayscale layer */}
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden"
                
                >
                  {/* Blur / fade layer */}
                  <motion.div
                    animate={{
                      filter: isBlurring ? "blur(6px)" : "blur(0px)",
                      opacity: isBlurring ? 0 : 1,
                      scale: isBlurring ? 0.92 : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Image
                      onClick={toggleModal}
                      src={slideImages[imgIdx]}
                      alt="adil"
                      priority={true}
                      width={192}
                      height={192}
                      quality={95}
                      placeholder="blur"
                      className="sm:h-40 sm:w-40 cursor-pointer h-32 w-32 rounded-full object-cover z-10"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </BlurFade>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 w-full h-full z-[99999] bg-[#1f1f1f] backdrop-blur-sm bg-opacity-75 duration-300 transition-opacity flex items-center justify-center"
            onClick={toggleModal}
          >
            <XIcon size={30} className="absolute right-8 top-5 cursor-pointer" onClick={toggleModal} />
            <motion.div className="" layoutId="image-card">
              <Image
                src={slideImages[imgIdx]}
                alt="Adil"
                width={384}
                height={384}
                quality={100}
                className="sm:h-96 sm:w-96 h-60 w-60 object-cover rounded-full border-2 border-neutral-200"
                placeholder="blur"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Intro;
