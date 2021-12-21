module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "600px",
      // => @media (min-width: 600px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
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
        24: "24px",
        36: "36px",
        48: "48px",
        96: "96px",
      },
      spacing: {
        0.5: "5px",
        1: "10px",
        1.2: "12px",
        1.5: "15px",
        2: "20px",
        3.6: "36px",
        10: "100px",
        12: "120px",
        20: "200px",
        30: "300px",
      },
      padding: {
        0.5: "5px",
        1: "10px",
        1.5: "15px",
        2: "20px",
        2.5: "25px",
        3: "30px",
        3.5: "35px",
        4: "40px",
        4.5: "45px",
        5: "50px",
        5.5: "55px",
        6: "60px",
        6.5: "65px",
        7: "70px",
        7.5: "75px",
        8: "80px",
        8.5: "85px",
        9: "90px",
        9.5: "95px",
        10: "100px",
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
    },
  },
  plugins: [],
};
