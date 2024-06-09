"use client";

import React, { useState } from "react";
import useBooksData from "../hooks/useBooksData";
import LoadingSpinner from "src/components/page-utils/LoadingSpinner";
import Header from "src/components/Layout/Header";
import Footer from "src/components/Layout/Footer";
import Content from "src/components/Content/Content";
import { Book } from "src/types";

function BookAssignmentView() {
  const [readingList, setReadingList] = useState<Book[]>([]);

  const { data, isLoading, error } = useBooksData();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Content
          data={data}
          readingList={readingList}
          setReadingList={setReadingList}
        />
        <Footer />
      </div>
    </div>
  );
}

export default BookAssignmentView;
