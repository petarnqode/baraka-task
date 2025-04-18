/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "420px",
      },
      width: {
        767: "767px",
      },
      colors: {
        white: "#fff",
        green: "#0CAD80",
        "green-transparent": "#E9FBF4",
        "green-border": "#85D6BF",
        "dark-grey": "#64748B",
        grey: "#94A3B8",
        "grey-secondary": "#475569",
        "lighy-grey": "#E2E8F0",
        "light-grey-transparent": "#f8fafc",
        "light-grey-alt": "#CBD5E1",
        "light-grey-in-active": "#F3F4F6",
        black: "#334155",
        transparent: "transparent",
        blue: "#3B82F6",
        "blue-secondary": "#93C5FD",
        "blue-transparent": "#EFF6FF",
        "light-blue": "#60A5FA",
        "light-blue-transparent": "#DBEAFE",
        yallow: "#FBBF24",
        "yallow-transparent": "#FEF9C3",
        "dark-orange": "#A16207",
        orange: "#EAB308",
        "orange-light": "#FFD879",
        "orange-transparent": "rgba(255, 216, 121, 0.35)",
        red: "#EF4444",
        "red-transparent": "#fbd9d9",
        "red-dark": "rgba(239, 68, 68, 0.76)",
        "red-light": "#DF1C41",
        "purple-light": "rgba(140, 85, 221, 0.37)",
        "purple-dark": "rgba(140, 85, 221, 0.86)",
        // New DS colors
        "green-500": "#359452",
        "green-600": "#257640",
        "blue-50": "#EEF6FF",
        "blue-100": "#D6EEFF",
        "blue-800": "#084AC5",
        "blue-900": "#0E295D",
        "orange-50": "#FFF7EC",
        "red-50": "#FEF2F3",
        "red-100": "#FFE1E2",
        "red-600": "#DF2029",
        "red-800": "#9B191F",
        "red-900": "#46090C",
        "grey-100": "#F6F8FA",
        "grey-200": "#E2E4E9",
        "grey-300": "#CDD0D5",
        "grey-900": "#0A0D14",
        "state-info": "#0675FF",
        "state-warning": "#F17B2C",
      },
      boxShadow: {
        "drop-down": "rgba(64, 64, 65, 0.16) 0px 12px 24px 0px",
      },
      borderWidth: {
        1: "1px",
        5: "5px",
      },
      borderRadius: {
        none: "0",
        xs: "4px",
        "xs-plus": "5px",
        sm: "10px",
        md: "12px",
        large: "18px",
        xl: "23px",
        xxl: "40px",
        "xxl-plus": "48px",
        xxxl: "56px",
        full: "50%",
        // New DS
        button: "8px",
      },
      fontFamily: {
        poppins: ['"Poppins"', "serif"],
        inter: '"Inter"',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  // List of runtime generated classes
  safelist: [
    {
      pattern: /(bg|text|border)-blue-(100|800|900)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /(bg|text|border)-red-(100|600|800|900)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /(bg|text|border)-green-(500|600)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /(bg|text|border)-grey-(100|200|300|900)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /bg-(blue|red|orange)-50/,
    },
    {
      pattern: /text-state-(info|warning)/,
    },
  ],
  plugins: [],
};
