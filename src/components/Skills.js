import React, { useState } from "react";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
} from "@tabler/icons-react";
import { cn } from "@/libs/utils";

export const Card = React.memo(
  ({ title, link, icon, hovered, setHovered, index }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <a
        className="flex justify-center items-center flex-col border border-navy dark:border-dark-800 md:py-16 py-5 hover:scale-110 transition-all ease-in-out duration-500 mx-5 lg:mx-0"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="md:w-10 md:h-10">{icon}</div>
        <h3 className="md:text-4xl text-2xl text-navy dark:text-gray-800">{title}</h3>
      </a>
    </div>
  )
);

Card.displayName = "Card";

export function Skills() {
  const [hovered, setHovered] = useState(null);

  const links = [
    {
      title: "Next Js",
      icon: (
        <IconBrandNextjs className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://nextjs.org/",
    },

    {
      title: "React Js",
      icon: (
        <IconBrandReact className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://react.dev/",
    },
    {
      title: "JavaScript",
      icon: (
        <IconBrandJavascript className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://www.javascript.com/",
    },
    {
      title: "HTML",
      icon: (
        <IconBrandHtml5 className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS",
      icon: (
        <IconBrandCss3 className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },

    {
      title: "Tailwind CSS",
      icon: (
        <IconBrandTailwind className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://tailwindcss.com/",
    },
    {
      title: "Node js",
      icon: (
        <IconBrandNodejs className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://nodejs.org/en",
    },
    {
      title: "Python",
      icon: (
        <IconBrandPython className="h-full w-full text-navy dark:text-gray-800" />
      ),
      href: "https://www.python.org/",
    },
  ];

  return (
    <section
      className="flex xl:py-40 lg:py-20 py-10 w-full flex-col bg-warmtaupe dark:bg-slate-400 justify-center items-center xl:gap-20 gap-10 mx-auto lg:px-20 md:px-10 px-4"
      id="skills"
    >
      <h2 className="md:text-6xl text-4xl text-center text-navy dark:text-gray-800 leading-snug">
        Explore the languages I work with
      </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 container gap-10">
        {links.map((link, index) => (
          <Card
            link={link.href}
            title={link.title}
            index={index}
            icon={link.icon}
            key={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </section>
  );
}