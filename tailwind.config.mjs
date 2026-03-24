const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      colors: {
        background: "#D6D6D6",
        content: "#3B413C",
        highlight: "#CDDEE5",
        light: "#E6F0F2",
        softbeige: "#EFEFEF",
        warmtaupe: "#CDDEE5",
        mutedterracotta: "#E08E79",
        deepclay: "#A45D5D",
        charcoalbrown: "#9EBECB",
        oynx: "#7296A4",
        navy: "#34495e",
        darkBackground: "#0D1117", // Deep dark background (alternative to bg-zinc-900)
        darkSofter: "#161B22", // Slightly lighter for secondary elements
        darkTaupe: "#2A3B47", // Darker version of warmtaupe
        darkCharcoal: "#3D5A6B", // Darkened version of charcoalbrown
        darkOnyx: "#537687", // Darkened oynx with more depth
        darkNavy: "#1F2A39",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}