"use client";

import React, { useState } from "react";
import useBooksData from "../hooks/useBooksData";
import LoadingSpinner from "src/components/page-utils/LoadingSpinner";
import Header from "src/components/Layout/Header";
import Footer from "src/components/Layout/Footer";
import Content from "src/components/Content/Content";

//revamp UI: Done
//change font (still need to check how to apply it fully)
//TODO: ensure reading list can only be populated with one item at a time/ use a Set ()
//enhance error handling for all components and fetch calls
//change fetch to use SWR
//add tests
//add loading states
//add empty states
//misc: add dark mode
//rename files especially root component

export default function BookAssignmentView() {
  const [readingList, setReadingList] = useState<Array<Record<string, string>>>( //should adjust this to a set to disallow multiple values in the set, or set a validator for duplicate values, or create a dedup function
    []
  );

  const { data, isLoading, error } = useBooksData();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Content
        data={data}
        readingList={readingList}
        setReadingList={setReadingList}
      />
      <Footer />
    </div>
  );
}
