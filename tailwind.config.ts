import cashinds from "@cashinbr/design-system/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [cashinds],
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/@cashinbr/design-system/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
