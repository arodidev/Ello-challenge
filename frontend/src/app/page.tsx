"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [bookData, setBookData] = useState();

  // useEffect(() => {
  const url = new URL("http://localhost:4000/books");

  const query = `query { books {
      author, coverPhotoURL, title, __typename
    }}`;

  const params = { query: query };

  url.search = new URLSearchParams(params).toString();

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.data.books))
    .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <h1>Hey there</h1> <h5>New Ello project has c ha nged again</h5>
    </>
  );
}
