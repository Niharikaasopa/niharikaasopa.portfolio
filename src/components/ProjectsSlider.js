import React from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Arapey, Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
const arapey = Arapey({ subsets: ["latin"], weight: ["400"] });

export const ProjectsSlider = ({ autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const testimonials = [
    {
      src: "/projects/rolls-royce.webp",
      name: "Clone of Rolls Royce Website",
      quote: `Created a replica of the Rolls-Royce website using React, focusing on responsiveness and user interface design to closely match the original website's features and layout.`,
      link: "https://rolls-royce-web.vercel.app/",
    },
    {
      src: "/projects/keep.webp",
      name: "Clone of Google Keep",
      quote:
        "Developed a clone of Google Keep, implementing key features like note-taking, categorization, and reminders using React, with a focus on improving UI/UX and functionality.",
      link: "https://keepgoogle.vercel.app/",
    },
    {
      src: "/projects/weather.webp",
      name: "Weather App Using Api",
      quote:
        "Built a weather app that fetches real-time data from a weather API to display current weather conditions based on the user's location, focusing on user interface and API integration.",
      link: "https://weatherapp-kappa-rose.vercel.app/",
    },
  ];

  const rotations = [-9, 4, -3, 8, -5, 6, -7, 2];
  const randomRotateY = (index) => rotations[index % rotations.length];

  return (
    <section
      className="xl:py-40 lg:py-20 pt-10 section-projects selection:bg-oynx selection:text-white bg-light dark:bg-darkSofter lg:px-20 md:px-10 px-4"
      id="projects"
    >
      <h2
        className={`text-5xl lg:text-7xl text-center text-oynx dark:text-white ${italiana.className}`}
      >
        My Projects
      </h2>
      <div
        className={`max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 ${arapey.className}`}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
          <div>
            <div className="relative md:h-80 h-48 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(index),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(index),
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(index),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <a
                      href={testimonials[active].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <a
                href={testimonials[active].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-4xl font-bold dark:text-white text-oynx hover:underline transition-all duration-300 ease">
                  {testimonials[active].name}
                </h3>
              </a>
              <motion.p className="text-xl text-gray-700 mt-8 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-5">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-oynx dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-white dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-oynx dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-white dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
