"use client";

import { useState, useEffect } from "react";
import { fetcher, query } from "src/api";
import { Book } from "src/types";

const useBooksData = () => {
  const [data, setData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error[] | null>(null);

  const url = new URL("http://localhost:4000/books");

  const params = { query: query };

  url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    fetcher(url)
      .then((data) => setData(data?.data?.books))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useBooksData;
