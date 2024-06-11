import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import InfoSnackBar from "../page-utils/InfoSnackBar";
import { Book } from "src/types";
import { findBookByTitleAndAuthor } from "src/helpers";

interface SearchBarProps {
  books: Book[];
  readingList: Book[];
  setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  books,
  readingList,
  setReadingList,
}) => {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);

  const handleChange = (newValue: string) => {
    const [bookTitle, author] = newValue.split(":");

    const selectedBookTitle = bookTitle.trim();
    const selectedBookAuthor = author.trim();

    const updatedBook = findBookByTitleAndAuthor(
      books,
      selectedBookTitle,
      selectedBookAuthor
    );

    if (updatedBook) {
      if (
        findBookByTitleAndAuthor(
          readingList,
          updatedBook.title,
          updatedBook.author
        )
      ) {
        setShowSnackBar(true);
        return;
      }
      setReadingList((previousList: Book[]) => [...previousList, updatedBook]);
    }
  };

  return (
    <div className="mt-10 h-14 flex justify-center">
      <div className="flex-grow max-w-xl">
        <Autocomplete
          id="free-solo-2-demo"
          disableClearable
          options={books?.map((option) => `${option.title} : ${option.author}`)}
          onChange={(event, newValue: string) => handleChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select item to add to reading list"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <InfoSnackBar
          showSnackBar={showSnackBar}
          setShowSnackBar={setShowSnackBar}
          message="This book already exists on the reading list!"
        />
      </div>
    </div>
  );
};

export default SearchBar;
