"use client";

import useBooksData from "./hooks/useBooksData";

export default function Home() {
  const { data, isLoading, error } = useBooksData();

  console.log({ data: data, isLoading: isLoading, error: error });

  if (isLoading) return <h1>Loading data...</h1>;
  return (
    <>
      {data?.map((eachEntry, index) => {
        const { author, coverPhotoURL, title } = eachEntry;

        return (
          <>
            <h3>Title number {index}</h3>
            <ul>
              <li>author: {author}</li>
              <li>title: {title}</li>
            </ul>
            <img
              src={`./${coverPhotoURL}`}
              alt="my book image"
              width="50px"
              height="20px"
            />
          </>
        );
      })}
    </>
  );
}
