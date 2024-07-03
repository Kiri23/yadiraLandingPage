import { type Config } from "tailwindcss";
import daisyui from "npm:daisyui";

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
  // @ts-ignore
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // or any other themes you want to use
  },
} satisfies Config;
