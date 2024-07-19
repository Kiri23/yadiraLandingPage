import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        sans2: ["Sen"],
      },
      backgroundImage: {
        "hero-person": "url('heroPerson')",
        "serene-sky": "linear-gradient(180deg, #FEE9EC 0%, #FBEDF2 100%)",
      },
      colors: {
        pinkBrand: "#f5dae1",
        blueBrand: "#33516C",
        pink: {
          110: "#fce5f2",
          120: "#fce2f1",
          150: "#fcdbee",
        },
        cremita: "#f8f8f0",
        greenBrand: "#c5cfc6",
        brownBrand: "#7a7369",
      },
    },
    container: {
      center: true,
    },
  },
  // not using any plugins because it mess with vs code tailwind intelissense.
} satisfies Config;
