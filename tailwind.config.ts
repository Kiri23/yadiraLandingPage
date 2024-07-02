import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      pink: "#f5dae1",
    },
    container: {
      center: true,
    },
  },
} satisfies Config;
