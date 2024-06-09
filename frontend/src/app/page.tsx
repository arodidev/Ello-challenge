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
    <div>
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
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer sticky bottom-0 w-full">
      <footer className="bg-secondary text-white py-4">
        <div className="container mx-auto text-center">
          <div className="text-accent">
            &copy; Crafted by{" "}
            <a href="https://github.com/arodidev" target="_blank">
              <span className="text-primary">Jamie Arodi.</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface ContentProps {
  data: Array<Record<string, string>>;
  readingList: Array<Record<string, string>>;
  setReadingList: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
}
const Content: React.FC<ContentProps> = ({
  data,
  readingList,
  setReadingList,
}) => {
  return (
    <div className="page-content flex-grow mx-8 my-4">
      <SearchBar
        books={data}
        readingList={readingList}
        setReadingList={setReadingList}
      />
      <ReadingList
        readingList={readingList}
        filterReadingList={setReadingList}
      />
    </div>
  );
};

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
