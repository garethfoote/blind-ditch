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
          // DEFAULT: "#F7F6F1",
          DEFAULT: "#F4F3EE",
          // DEFAULT: "#FFF",
        },
        yellow: "#FFFF6E",
        mint: "#B1FBE6",
        blue: "#0044F3",
        yellow: "#FFFF6E",
        black: "#1F1F1F",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        "2xl": "64px",
      },
      letterSpacing: {
        tighter: "-.04em",
        wide: "0.0625rem" /* 1px */,
        wider: "0.25rem" /* 4px */,
        widest: "0.5rem" /* 8px */,
      },
      fontFamily: {
        main: ["UniversLTStd", "Helvetica", "Arial", "sans-serif"],
        accent: ["TerminalGrotesque", "Courier New"],
      },
      fontSize: {
        xs: "0.875rem" /* 14 */,
        sm: "1rem" /* 16 */,
        base: "1.125rem" /* 18 */,
        md: "1.375rem" /* 22 */,
        lg: "1.5rem" /* 24 */,
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
        "1/2-screen": "50vh",
      },
      minHeight: {
        64: "16rem",
        80: "20rem",
      },
      lineHeight: {
        12: "3rem",
      },
      transitionDelay: {
        400: "400ms",
        600: "600ms",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
};
