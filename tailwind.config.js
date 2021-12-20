module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screen: {
        phone: "600px",
        // => @media (min-width: 600px) { ... }
        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary: "#040b14",
        secondary: {
          DEFAULT: "#1f5297",
          dark: "#173b6c",
          light: "#149ddd",
        },

        white: "#ffffff",
        black: "#050d18",
        background: "#f5f8fd",
        gray: {
          DEFAULT: "#a7a8b3",
          light: "#ced4da",
          dark: "#2c2f3f",
        },
      },
      fontSize: {
        14: "14px",
        16: "16px",
        36: "36px",
        48: "48px",
        96: "96px",
      },
      spacing: {
        0.5: "5px",
        1: "10px",
        1.5: "15px",
        2: "20px",
        30: "300px",
      },
    },
  },
  plugins: [],
};
