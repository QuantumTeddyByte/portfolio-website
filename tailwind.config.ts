import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bg: "#282c34",
				main: "#393f4a",
				mainAccent: "#d19a66",
				fg: "#abb2bf",
			},
			borderRadius: {
				base: "5px",
			},
			boxShadow: {
				base: "4px 4px 0px 0px rgba(0,0,0,1)",
			},
			translate: {
				boxShadowX: "4px",
				boxShadowY: "4px",
			},
			fontWeight: {
				base: "500",
				heading: "700",
			},
			screens: {
				w450: { raw: "(max-width: 450px)" },
			},
		},
	},
	plugins: [tailwindAnimate],
};
export default config;
