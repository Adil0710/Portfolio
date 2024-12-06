"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { useTheme } from "@/context/themeContext";
import Logo from "./Logo";

const PreLoader: React.FC = () => {
  const { theme } = useTheme();
    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                document.dispatchEvent(new Event("preloaderComplete"));
            },
        });

        const preLoaderAnim = () => {
            tl.to(".texts-container", {
                duration: 0,
                opacity: 1,
                ease: "Power3.easeOut",
            })
                .fromTo(
                    ".texts-container span",
                    {
                        y: 70,
                        skewY: 10,
                        duration: 1,
                        delay: 1,
                        stagger: 0.4,
                        ease: "Power3.easeOut",
                    },
                    {
                        duration: 1.5,
                        y: 0,
                        skewY: 0,
                        delay: 1,
                        stagger: 0.4,
                        ease: "Power3.easeOut",
                    }
                )
                .to(".texts-container span", {
                  duration: 0.8,
                  y: 70,
                  skewY: -20,
                  stagger: 0.2,
                  ease: "Power3.easeOut",
              })
                .to("body", {
                    duration: 0.01,
                    css: { overflowY: "scroll" },
                    ease: "Power3.easeInOut",
                })
                .from(".sub", {
                    duration: 0.8,
                    opacity: 0,
                    y: 80,
                    ease: "Expo.easeOut",
                })
                .to(
                    ".preloader",
                    {
                        duration: 0.8,
                        height: "0vh",
                        ease: "Power3.easeOut",
                        onComplete: mobileLanding,
                    },
                    "-=1"
                )
                .to(".preloader", {
                    duration: 0,
                    css: { display: "none" },
                });
        };

        const mobileLanding = () => {
            if (window.innerWidth < 763) {
                tl.from(".landing__main2", {
                    duration: 0.1,
                    delay: 0,
                    opacity: 0,
                    y: 60,
                    ease: "Expo.easeOut",
                });
            }
        };

        preLoaderAnim();
    }, []); // Empty dependency array to run the animation only on mount

    return (
        <div
        className={` preloader gap-[5px] overflow-hidden text-[14px]   sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]`}
            style={{
                height: "100vh",
                width: "100%",
               
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <div
                className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold  opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                    height: "60px",
                }}
            >
                <span><Logo className=" w-8 h-8"/></span>
                <span> Adil Patel</span>
                <span> / </span>
                <span className="flex items-center justify-center gap-3">Full Stack Developer</span>
                <div className="sub hidden"></div>
            </div>
        </div>
    );
};

export default PreLoader;
