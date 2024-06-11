"use client";

import React from "react";
import BookAssignmentView from "../components/BookAssignmentView";
import { ThemeProvider } from "@mui/system";
import theme from "src/themeProvider";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BookAssignmentView />
    </ThemeProvider>
  );
}
