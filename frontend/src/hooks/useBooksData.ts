"use client";

import { useState, useEffect } from "react";

const useBooksData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const url = new URL("http://localhost:4000/books");

  const query = `query { books {
      author, coverPhotoURL, title, __typename
    }}`;

  const params = { query: query };

  url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data?.data?.books))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useBooksData;
