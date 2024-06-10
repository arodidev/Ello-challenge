"use client";

import { useState, useEffect } from "react";
//will refactor for SWR
import { fetcher } from "src/api";
import { query } from "src/api";
import { Book } from "src/types";

const useBooksData = () => {
  const [data, setData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error[] | null>(null); //TBD whether null or undefined

  const url = new URL("http://localhost:4000/books");
  const params = { query: query };
  url.search = new URLSearchParams(params).toString(); //might revamp this to use conventional GraphQl fetching(refer to SWR docs)

  useEffect(() => {
    fetcher(url)
      .then((data) => setData(data?.data?.books))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useBooksData;
