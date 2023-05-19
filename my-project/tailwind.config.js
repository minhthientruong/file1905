/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      md: "1440px",

    },
  },
  theme: {
    extend: {
      gradientColorStops: {
        primary: "#E55C79", // Điểm bắt đầu gradient
        secondary: "#FF9679", // Điểm kết thúc gradient
        "primary/50": "#FCEFF2",
        "secondary/50": " #FFF5F2",
        "primary/100": "#FADEE4",
        "secondary/100": "#FFEAE4",
        "primary/200": "#F5BEC9",
        "secondary/200": "#FFD5C9",
        "primary/300": "#EF9DAF",
        "secondary/300": "#FFC0AF",
        "primary/400": "#EA7D94",
        "secondary/400": "#FFAB94",
        "primary/500": "#E55C79",
        "secondary/500": "#FF9679",
        "primary/600": "#BC4A62",
        "secondary/600": "#DC7B61",
        "primary/700": "#92384B",
        "secondary/700": "#B96149",
        "primary/800": "#692735",
        "secondary/800": "#964630 ",
        "primary/900": "#3F151E",
        "secondary/900": "#732C18",
      },
    },
  },
  plugins: [],
};
