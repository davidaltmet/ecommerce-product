/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",
        Verydarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
      },
      textColor: {
        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",
        Verydarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
      },
      fontSize: {
        16: "16px",
      },
      borderColor: {
        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",
      },
      width: {
        30: "30%",
      },
      height: {
        25: "26rem",
      },
    },
  },
  plugins: [],
};
