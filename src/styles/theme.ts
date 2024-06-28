"use client";

import { type ThemeOptions, createTheme } from "@mui/material";

export const theme: ThemeOptions = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3949ab",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
  },
});
