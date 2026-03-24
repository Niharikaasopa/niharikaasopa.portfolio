"use client";

import { Dancing_Script, Italiana } from "next/font/google";
import React from "react";

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutMe = () => {
  return (
    <section
      className="bg-charcoalbrown rounded-xl dark:rounded-none text-white dark:bg-darkNavy section-about selection:bg-oynx lg:px-20 md:px-10 px-4"
      id="about"
    >
      <div className="container mx-auto xl:grid xl:grid-cols-3 flex lg:flex-row flex-col gap-12 xl:p-0 lg:p-20 md:p-10 py-10 px-5">
        <div className="flex flex-col xl:justify-start justify-center items-center xl:items-start gap-10 col-span-2 xl:py-40">
          <h2
            className={`text-3xl md:text-6xl font-bold dark:text-white ${italiana.className}`}
          >
            Hello there, I'm Niharika Asopa
          </h2>
          <p className="text-xl max-w-2xl text-pretty">
            I am a computer engineering undergraduate and currently a master’s
            student in data science at Johns Hopkins University. I have industry
            experience as a full-stack software engineer and am becoming
            increasingly interested in Machine Learning and AI. I enjoy building
            things from end-to-end, from the user interface to the backend and
            data science. I am particularly interested in projects where
            technology can have an impact on the real world. I am currently
            interested in the world of LLMs, deep learning and AI. Explore my
            work and feel free to connect!
          </p>
          <a
            className={`text-2xl text-right text-white w-2/3 hover:text-oynx transition-all ease duration-200 dark:text-neutral-200 py-4 ${dancingScript.className}`}
            target="_blank"
            rel="noopener noreferrer"
            href="/NiharikaAsopaResume.pdf"
          >
            more about me
          </a>
        </div>
        <div className="col-span-1 flex justify-center items-center xl:w-5/6">
          <img
            className="object-center w-full"
            src="/avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
