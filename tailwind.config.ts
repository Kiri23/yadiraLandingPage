import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-person": "url('heroPerson')",
      },
      colors: {
        pinkBrand: "#f5dae1",
        blueBrand: "#2B4257",
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
