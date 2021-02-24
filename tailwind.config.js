module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    boxShadow: {
      DEFAULT: "0 5px 5px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      colors: {
        offwhite: {
          dark: "#D7D3C1",
          DEFAULT: "#F4F3EE",
        },
        yellow: {
          light: "#FFFF99",
          DEFAULT: "#FFFF6E",
        },
        mint: {
          dark: "#0CE9AA",
          DEFAULT: "#B1FBE6",
        },
        blue: "#0044F3",
        black: "#1F1F1F",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "80px",
      },
      letterSpacing: {
        tighter: "-.04em",
        wide: "0.0625rem" /* 1px */,
        wider: "0.25rem" /* 4px */,
        widest: "0.5rem" /* 8px */,
      },
      fontFamily: {
        main: ["UniversNextPro", "Helvetica", "Arial", "sans-serif"],
        accent: ["TerminalGrotesque", "Courier New"],
      },
      fontSize: {
        "2xs": "0.75rem" /* 12 */,
        xs: "0.875rem" /* 14 */,
        sm: "1rem" /* 16 */,
        base: "1.125rem" /* 18 */,
        md: "1.375rem" /* 22 */,
        lg: "1.5rem" /* 24 */,
        "lg-xl": "1.75rem" /* 28 */,
        xl: "2rem" /* 32 */,
        "2xl": "3rem" /* 48 */,
        "3xl": "4.5rem" /* 72 */,
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/10": "10%",
      },
      width: {
        100: "25rem",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      height: {
        100: "25rem",
        104: "26rem",
        112: "28rem",
        116: "29rem",
        "1/2-screen": "50vh",
      },
      minHeight: {
        24: "6rem",
        36: "9rem",
        64: "16rem",
        80: "20rem",
        100: "25rem",
        116: "29rem",
      },
      lineHeight: {
        12: "3rem",
        14: "3.5rem",
      },
      transitionDelay: {
        400: "400ms",
        600: "600ms",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      backgroundImage: (theme) => ({
        topography: "url('/topography.svg')",
        diagonals: "url('/diagonal-lines.svg')",
        tictactoe: "url('/tic-tac-toe.svg')",
      }),
      backgroundSize: {
        10: "10%",
        25: "25%",
        50: "50%",
        100: "100%",
      },
    },
  },
};
