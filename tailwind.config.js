module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    boxShadow: {
      DEFAULT: "0 5px 5px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      colors: {
        offwhite: {
          dark: "#D7D3C1",
          DEFAULT: "#F4F3EE",
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
        widest: "0.5rem",
      },
      fontFamily: {
        main: ["UniversLTStd", "Helvetica", "Arial", "sans-serif"],
        accent: ["TerminalGrotesque", "Courier New"],
      },
      fontSize: {
        xsm: "0.875rem" /* 14 */,
        sm: "1rem" /* 16 */,
        base: "1.125rem" /* 18 */,
        md: "1.375rem" /* 22 */,
        lg: "1.5rem" /* 24 */,
        xl: "2rem" /* 32 */,
        "2xl": "3rem" /* 48 */,
        "3xl": "4.5rem" /* 72 */,
      },
      width: {
        // "max-image": "40rem",
        // "max-col": "53.75rem",
        // "w-xl": "36rem",
        // "w-2xl": "42rem",
        // "w-4xl": "56rem",
        // "w-6xl": "72rem",
      },
      maxWidth: {
        // max-w-xl  = 36rem = 576px
        // max-w-2xl = 42rem = 672px
        // max-w-4xl = 56rem = 896px
        // max-w-6xl = 72rem = 1152px
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
};
