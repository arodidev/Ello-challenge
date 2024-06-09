"use client";

import React from "react";
import BookAssignmentView from "../components/BookAssignmentView";
import { ThemeProvider } from "@mui/system";
import theme from "src/themeProvider";

//enhance error handling for all components and fetch calls TO:DO
//change fetch to use SWR
//add tests

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BookAssignmentView />
    </ThemeProvider>
  );
}
