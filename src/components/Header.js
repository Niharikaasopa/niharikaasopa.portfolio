"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

const Header = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const slowScrollTo = (targetId, duration = 1500) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;

    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

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

  return (
    <nav
      className={`text-black dark:text-white font-bold body-font bg-transparent fixed top-0 w-full backdrop-blur-2xl transition-all ease duration-1000 selection:bg-oynx dark:bg-black/40 selection:text-white z-[9999] lg:px-20 md:px-10 px-4`}
    >
      <div className="container mx-auto flex flex-wrap md:py-5 pt-5 flex-col md:flex-row items-center justify-start md:justify-between px-5 md:px-10 lg:px-20 xl:px-0">
        {/* Logo */}
        <a
          className="hidden md:flex justify-center title-font font-medium items-center text-gray-900 cursor-pointer hover:scale-110 transition-all ease duration-200"
          href="/"
        >
          <Image
            height="50"
            width="60"
            alt="logo-light"
            src="/Portfoilio-logo.svg"
            className="block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <Image
            height="50"
            width="60"
            alt="logo-dark"
            src="logo-white.svg"
            className="hidden dark:block"
          />
        </a>
        <div className="flex justify-between items-center w-full md:hidden">
          <a
            className="flex justify-center title-font font-medium items-center text-gray-900 cursor-pointer hover:scale-110 transition-all ease duration-200"
            href="/"
          >
            <Image
              height="50"
              width="60"
              alt="logo-light"
              src="/Portfoilio-logo.svg"
              className="block dark:hidden"
            />

            {/* Dark Mode Logo */}
            <Image
              height="50"
              width="60"
              alt="logo-dark"
              src="logo-white.svg"
              className="hidden dark:block"
            />
          </a>
          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-8 h-8 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center text-xl py-5 justify-center gap-2 md:gap-5`}
        >
          {["about", "projects", "skills", "contact"].map((id, index) => (
            <a
              key={index}
              className="py-2 md:py-0 hover:scale-110 transition-transform ease duration-200 hover:underline cursor-pointer"
              onClick={() => {
                document;
                slowScrollTo(id, 2000);
                setIsOpen(false);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
            </a>
          ))}
          <div className="md:hidden block -ml-10">
            <AnimatedButton
              link={() => window.open("/NiharikaAsopaResume-2.pdf")}
              color={`${darkMode ? "#000000" : "[#1E1D1D]"}`}
            />
          </div>
        </div>

        <div className="hidden md:block">
          <AnimatedButton
            link={() => window.open("/NiharikaAsopaResume-2.pdf")}
            color={`${darkMode ? "#000000" : "[#1E1D1D]"}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
