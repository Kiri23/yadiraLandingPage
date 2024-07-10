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
      },
    },
    container: {
      center: true,
    },
  },
  // not using any plugins because it mess with vs code tailwind intelissense.
} satisfies Config;
