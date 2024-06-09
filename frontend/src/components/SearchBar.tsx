import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import InfoSnackBar from "../components/page-utils/InfoSnackBar";

interface SearchBarProps {
  books: Array<Record<string, string>>;
  readingList: Array<Record<string, string>>;
  setReadingList: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
}

const SearchBar: React.FC<SearchBarProps> = ({
  books,
  readingList,
  setReadingList,
}) => {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);

  const handleChange = (newValue: any) => {
    const bookTitle = newValue.split(":")[0].trim();
    const updatedBook = books?.find((book) => book.title == bookTitle);
    if (updatedBook) {
      if (readingList.find((item) => item.title === updatedBook.title)) {
        setShowSnackBar(true);
        return;
      }
      setReadingList((previousList: any[]) => [...previousList, updatedBook]); //will fix the any type here
    }
  };

  return (
    <div className="mt-10 h-14 flex justify-center">
      <div className="flex-grow max-w-xl">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={books.map((option) => `${option.title} : ${option.author}`)}
          onChange={(event: any, newValue: string) => handleChange(newValue)}
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
