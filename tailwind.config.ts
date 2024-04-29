import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        l1: "linear-gradient(180.00deg, rgb(56, 193, 165) -0.012%,rgb(8, 145, 213) 99.988%)",
        l2: "linear-gradient(180.00deg, rgb(217, 227, 19),rgb(60, 188, 52) 100%)",
        l3: "linear-gradient(180.00deg, rgb(224, 173, 56) -0.012%,rgb(235, 62, 28) 93.388%)",
        l4: "linear-gradient(180.00deg, rgb(56, 193, 165) -0.012%,rgb(8, 145, 213) 99.988%)",
        l5: "linear-gradient(270.00deg, rgb(113, 155, 255) 0%,rgb(218, 138, 255) 77.083%)",
        l6: "linear-gradient(180.00deg, rgb(217, 227, 19),rgb(60, 188, 52) 100%)",
        l7: "linear-gradient(180.00deg, rgb(224, 173, 56) -0.012%,rgb(235, 62, 28) 99.988%)",
        l11: "linear-gradient(270.00deg, rgb(3, 3, 3) 0%,rgba(3, 3, 3, 0.8) 55.456%,rgba(3, 3, 3, 0) 100%)",
      },
      backgroundColor: {
        c1: "rgb(42, 42, 42)",
      },
    },
    fontFamily: {
      f1: "Neue Machina",
      f2: "NEXT Book",
      f3: "NEXT Poster",
    },
    colors: {
      c1: "rgb(242, 242, 242)",
      c2: "rgb(158, 250, 19)",
      c3: "rgb(237, 237, 237)",
      c4: "#fff",
      c5: "rgb(103, 103, 103)",
      c6: "rgb(241, 241, 241)",
    },
    fontSize: {
      s1: "12px",
      s2: "10px",
      s3: "16px",
      s4: "14px",
    },
  },
  plugins: [],
};
export default config;
