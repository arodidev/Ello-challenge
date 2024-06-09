import { type Book } from "./types";

export function findBookByTitleAndAuthor(
  books: Book[],
  title: string,
  author: string
) {
  return books?.find((book) => book.title == title && book.author == author);
}

export const updateReadingList = (readingList: Book[], item: Book) => {
  return readingList.filter(
    (itemsToFilter) =>
      !(
        itemsToFilter.title == item.title && itemsToFilter.author == item.author
      )
  );
};
