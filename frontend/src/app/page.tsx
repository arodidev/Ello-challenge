"use client";

import React from "react";
import BookAssignmentView from "../components/BookAssignmentView";
import { ThemeProvider } from "@mui/system";
import theme from "src/themeProvider";

//revamp UI: Done
//change font: Done
//TODO: ensure reading list can only be populated with one item at a time: Done
//enhance error handling for all components and fetch calls TO:DO
//change fetch to use SWR
//add tests
//add loading states: Done
//add empty states: Done
//rename files especially root component

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BookAssignmentView />;
    </ThemeProvider>
  );
}
