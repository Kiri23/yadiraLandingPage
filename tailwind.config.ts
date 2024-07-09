import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      pink: "#f5dae1",
      blue: "#2B4257",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "hero-person": "url('heroPerson')",
      },
    },
    container: {
      center: true,
    },
  },
  // not using any plugins because it mess with vs code tailwind intelissense.
} satisfies Config;
