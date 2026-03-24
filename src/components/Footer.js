"use client";

import { Italiana, Red_Hat_Text } from "next/font/google";
import React from "react";

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
const poiretOne = Red_Hat_Text({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <footer
      className="text-gray-600 dark:text-white bg-charcoalbrown dark:bg-darkBackground selection:bg-oynx selection:text-white w-full h-full lg:px-20 md:px-10 px-4"
      id="contact"
    >
      <div className="flex flex-col pt-10 container mx-auto px-5 md:px-10 lg:px-20 xl:px-0">
        <div className="flex justify-between items-start lg:flex-row flex-col">
          <div className="w-full pb-10">
            <h2
              className={`lg:w-2/3 w-full lg:text-7xl text-6xl pb-5 lg:pb-12 2xl:text-[120px] ${italiana.className} capitalize`}
            >
              get in touch
            </h2>
            <p className="flex items-center gap-2">
              Email:{" "}
              <a
                href="mailto:niharikaasopa@gmail.com"
              >
                niharikaasopa@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              Location: <span>Baltimore, Maryland</span>
            </p>
          </div>
          <div
            className={`flex lg:w-fit w-full lg:gap-20 gap-10 lg:pb-0 pb-5 lg:justify-end justify-start 2xl:py-10 2xl:pb-12 ${poiretOne.className}`}
          >
            <div className="flex flex-col gap-2 lg:items-end">
              <h3 className="font-bold text-2xl">SOCIALS</h3>
              <a
                href="https://github.com/Niharikaasopa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="text-xl">GITHUB</h4>
              </a>
              <a
                href="https://in.linkedin.com/in/niharika-asopa-114406277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="text-xl">LINKEDIN</h4>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="dark:text-light text-black sm:border-softbeige sm:py-2 sm:mt-0 mt-4 text-center">
          © {new Date().getFullYear()} Niharika Asopa. Built with 🤍 using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;