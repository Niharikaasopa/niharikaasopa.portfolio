"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./AuroraBackground";
import { Dancing_Script, Italiana } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });

const useSmoothScroll = () => {
  return (targetId, duration = 1500) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;

    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = easeInOut(Math.min(timeElapsed / duration, 1));

      window.scrollTo(0, start + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };
};
const scrollTo = useSmoothScroll();

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center selection:bg-oynx selection:text-white lg:px-20 md:px-10 px-4"
      >
        <div
          className={`text-base md:text-4xl dark:text-neutral-200 py-4 ${dancingScript.className}`}
        >
          Welcome to my website
        </div>
        <div
          className={`text-6xl xl:text-9xl font-bold dark:text-white text-center ${italiana.className}`}
        >
          NIHARIKA ASOPA
        </div>
        <button
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 text-lg cursor-pointer"
          onClick={() => scrollTo("about", 2500)}
        >
          Let's go
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroSection;