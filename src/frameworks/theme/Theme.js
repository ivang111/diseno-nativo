import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#D9C5B4",
      dark: "#03579D",
    },
    secondary: {
      main: "#8C6F5E",
      dark: "#009290",
    },
    terceary: {
      main: "#594E45",
      dark: "#F37021",
    },
    fourth: {
      main: "#261F18",
      dark: "#FFE72D",
    },
    grey: {
      100: "#F7F7F7",
      150: "#d5d5d5",
      200: "#EAEAEA",
      300: "#CCCCCC",
      350: "#C4C4C4",
      400: "#B3B2B2",
      500: "#B3B3B3",
      600: "#8D8D8D",
      700: "#434242",
      800: "#545454",
      900: "#646464",
      950: "#6c6c6c",
    },
    success: {
      main: "#3DD386",
    },
    warning: {
      main: "#FFCF6A",
    },
    info: {
      main: "#4170D0",
    },
    error: {
      main: "#F6635C",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F6F6F6",
      pale: "#F2FFFF",
      light: "#F1F9FF",
    },
  },
  shadows: {
    0: "none",
    1: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    2: "0px 4px 8px -2px rgba(0, 0, 0, 0.1)",
    3: "0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
    4: "10px 20px 48px -12px rgba(0, 0, 0, 0.15)",
    5: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
    8: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
  },
  typography: {
    fontFamily: "",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontFamily: "",
      fontSize: 39,
    },
    h3: {
      fontFamily: "",
      fontSize: 31,
    },
    h4: {
      fontFamily: "",
      fontSize: 24,
    },
    h5: {
      fontFamily: "",
      fontSize: 20,
    },
    h6: {
      fontFamily: "",
      fontSize: 16,
    },
    body: {
      fontFamily: "",
      fontSize: 16,
    },
    body1: {
      fontFamily: "",
      fontSize: 14,
    },
    body2: {
      fontFamily: "",
      fontSize: 12,
    },
  },
});

export { defaultTheme };
