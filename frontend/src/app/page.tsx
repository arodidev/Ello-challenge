"use client";

import React, { useState } from "react";
import useBooksData from "../hooks/useBooksData";
import SearchBar from "src/components/SearchBar";
import ReadingList from "src/components/ReadingList";
import LoadingSpinner from "src/components/page-utils/LoadingSpinner";

//revamp UI: WIP
//change font
//TODO: ensure reading list can only be populated with one item at a time/ use a Set
//enhance error handling for all components and fetch calls
//change fetch to use SWR
//add tests
//add loading states
//add empty states
//misc: add dark mode
//rename files especially root component

const Header = () => {
  return (
    <header className="bg-secondary text-white px-8 py-4 shadow-lg">
      <div className=" mx-auto flex justify-between items-center">
        <div>
          <img
            src="https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93"
            alt="logo"
            width="70px"
            height="70px"
          />
        </div>
      </div>
    </header>
  );
};

export default function BookAssignmentView() {
  const [readingList, setReadingList] = useState<Array<Record<string, string>>>( //should adjust this to a set to disallow multiple values in the set, or set a validator for duplicate values, or create a dedup function
    []
  );
  const { data, isLoading, error } = useBooksData();

  if (isLoading) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div className="mx-8 my-4">
        <div className="mt-10 h-14 flex justify-center">
          <div className="flex-grow max-w-xl">
            <SearchBar
              books={data}
              readingList={readingList}
              setReadingList={setReadingList}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <ReadingList
            readingList={readingList}
            filterReadingList={setReadingList}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
