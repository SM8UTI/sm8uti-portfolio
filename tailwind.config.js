/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mianBlack-50": "#e6e7e7",
        "mianBlack-100": "#b2b5b4",
        "mianBlack-200": "#8c9190",
        "mianBlack-300": "#585e5d",
        "mianBlack-400": "#373f3d",
        "mianBlack-500": "#050f0d",
        "mianBlack-600": "#050e0c",
        "mianBlack-700": "#040b09",
        "mianBlack-800": "#030807",
        "mianBlack-900": "#020605",

        "text-50": "#fcfefd",
        "text-100": "#f7fbfa",
        "text-200": "#f3f9f8",
        "text-300": "#eef6f4",
        "text-400": "#eaf5f2",
        "text-500": "#e5f2ef",
        "text-600": "#d0dcd9",
        "text-700": "#a3acaa",
        "text-800": "#7e8583",
        "text-900": "#606664",

        "accent-50": "#eafffa",
        "accent-100": "#bffff0",
        "accent-200": "#a0ffe8",
        "accent-300": "#74ffde",
        "accent-400": "#59ffd8",
        "accent-500": "#30ffce",
        "accent-600": "#2ce8bb",
        "accent-700": "#22b592",
        "accent-800": "#1a8c71",
        "accent-900": "#146b57",

        "primary-50": "#f3fdfa",
        "primary-100": "#daf7f0",
        "primary-200": "#c8f4e9",
        "primary-300": "#afeee0",
        "primary-400": "#a0ebd9",
        "primary-500": "#88e6d0",
        "primary-600": "#7cd1bd",
        "primary-700": "#61a394",
        "primary-800": "#4b7f72",
        "primary-900": "#396157",
      },
      fontFamily: {
        secondary: "samarkan",
        "primary-regular": "almarena-display-regular",
        "primary-bold": "almarena-display-bold",
      },
    },
  },
  plugins: [],
};
