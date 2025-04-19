/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        green: "#0CAD80",
        "green-transparent": "#E9FBF4",
        "green-border": "#85D6BF",
        "dark-grey": "#64748B",
        grey: "#94A3B8",
        "lighy-grey": "#E2E8F0",
        "light-grey-transparent": "#f8fafc",
        "light-grey-alt": "#CBD5E1",
        black: "#334155",
        transparent: "transparent",
        blue: "#3B82F6",
        "light-blue-transparent": "#DBEAFE",
        orange: "#EAB308",
        red: "#EF4444",
      },
      boxShadow: {
        "drop-down": "rgba(64, 64, 65, 0.16) 0px 12px 24px 0px",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        none: "0",
        xs: "4px",
        sm: "10px",
        xxl: "40px",
        "xxl-plus": "48px",
      },
      fontFamily: {
        poppins: ['"Poppins"', "serif"],
        inter: '"Inter"',
      },
    },
  },

  plugins: [],
};
