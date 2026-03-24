"use client";

import Image from "next/image";

export default function AnimatedButton({ link, color }) {
  return (
    <button
      onClick={link}
      className={`relative inline-block text-${color} px-8 py-6 group`}
    >
      {/* Outer Circle */}
      <span
        className={`absolute inset-0 w-12 h-12 rounded-full border border-${color} shadow-lg transition-transform duration-300 group-hover:scale-0`}
        style={{ border: `1px solid ${color}` }}
      ></span>

      {/* White Circle */}
      <span className="absolute top-1/2 left-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-300 group-hover:scale-100">
        <Image
          width="6"
          height="6"
          className="w-6 h-6 text-white"
          src="/icons/button.svg"
          alt="arrow"
        />
      </span>

      {/* Text */}
      <span className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 whitespace-nowrap px-6 py-3 transition-transform duration-300 group-hover:translate-x-10 text-xl">
        Resume
      </span>
    </button>
  );
}