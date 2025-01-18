"use client";
import { cn } from "@/lib/utils";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  company: React.ReactNode;
  duration: React.ReactNode;
  logo: StaticImageData;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 20%"],
  });

  const handleClick = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific item's state
    }));
  };
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    // Calculate the total height of the timeline
    const calculateHeight = () => {
      if (ref.current) {
        let height = 0;
        data.forEach((_, index) => {
          const contentHeight = expandedItems[index]
            ? ref.current?.querySelectorAll(".timeline-content")[index]
                ?.scrollHeight || 0
            : 0;
          height += 100 + contentHeight; // Adjust based on base height + expanded content height
        });
        setHeight(height);
      }
    };

    calculateHeight();
  }, [expandedItems, data]);

  return (
    <div className="w-full bg-white dark:bg-black font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start flex-col pt-5 md:pt-5 md:gap-2 group"
          >
            <div
              className=" flex flex-col md:flex-row z-40 items-center top-40 self-start min-w-xs lg:min-w-[50%] md:w-full cursor-pointer"
              onClick={(e) => handleClick(index)}
            >
              <div className="h-12 absolute left-0 w-12 rounded-full border bg-white flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              <div className="md:pl-20 w-full">
                <h3 className="hidden md:flex text-base flex-row items-center gap-2 md:text-base font-bold">
                  {item.title}
                  <ChevronRightIcon
                    className={cn(
                      "size-5 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      expandedItems[index] ? "rotate-90 opacity-1" : "rotate-0"
                    )}
                  />
                </h3>
                <p className=" md:flex flex-row mt-1 items-center hidden">
                  {item.company}
                </p>
              </div>
              <div className="md:flex hidden justify-end w-full">
                <p>{item.duration}</p>
              </div>
            </div>
            {item.content && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedItems[index] ? 1 : 0,
                  height: expandedItems[index] ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="timeline-content md:block md:pl-20 hidden"
              >
                {item.content}
              </motion.div>
            )}

            <div
              className="relative pl-16 pr-2 md:pl-4 w-full"
              onClick={(e) => handleClick(index)}
            >
              <h3 className="md:hidden block text-xl mt-3 mb-2 text-left font-bold">
                {item.title}
              </h3>
              <div className=" flex flex-col  w-full md:text-sm text-xs gap-1 mb-0 mt-1.5">
                <p className=" flex md:hidden flex-row items-center">
                  {item.company}{" "}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      expandedItems[index] ? "rotate-90" : "rotate-0"
                    )}
                  />
                </p>
                <div className=" md:hidden block pl-6">
                  <p>{item.duration}</p>
                </div>
              </div>
              {item.content && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedItems[index] ? 1 : 0,
                    height: expandedItems[index] ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="timeline-content mt-4 md:hidden block"
                >
                  {item.content}
                </motion.div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t transition-all from-emerald-500 via-emerald-700 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
