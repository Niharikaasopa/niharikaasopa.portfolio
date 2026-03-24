import "@/styles/globals.css";
import { Arapey } from "next/font/google";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
const arapey = Arapey({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }) {
  const scrollRef = useRef(null);
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Niharika Asopa</title>
        <meta
          name="description"
          content="A portfolio showcasing my projects, skills, and experience in web development."
        />
        <meta
          name="keywords"
          content="Portfolio, Web Developer, React, Next.js, JavaScript, Frontend, Backend"
        />
        <meta name="author" content="Niharika" />
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Niharika's Portfolio" />
        <meta
          property="og:description"
          content="Explore my projects, skills, and experience in web development."
        />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:type" content="website" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${arapey.className} ${darkMode ? "dark" : ""}`} ref={scrollRef} data-scroll-container>
        <Component {...pageProps} />
        <button
        className="fixed bottom-4 right-4 bg-black dark:bg-white text-white dark:text-black p-2 rounded-full"
        onClick={() => setDarkMode(!darkMode)}
      >
        <Image width="20" height="20" src={darkMode ? "/icons/dark.svg" : "/icons/light.svg"} alt="theme" />
      </button>
      </div>
    </>
  );
}