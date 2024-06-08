"use client";

import React, { useState } from "react";
import useBooksData from "../hooks/useBooksData";
import SearchBar from "src/components/SearchBar";
import ReadingList from "src/components/ReadingList";
import LoadingSpinner from "src/components/page-utils/LoadingSpinner";

//TODO: ensure reading list can only be populated with one item at a time
//reavamp file structure
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
    <div>
      <div style={{ margin: "20px" }}>
        <SearchBar books={data} setReadingList={setReadingList} />
      </div>
      <div>
        <ReadingList
          readingList={readingList}
          filterReadingList={setReadingList}
        />
      </div>
    </div>
  );
}
