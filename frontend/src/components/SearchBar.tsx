import { Autocomplete, TextField } from "@mui/material";

interface SearchBarProps {
  books: Array<Record<string, string>>;
  setReadingList: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
}

const SearchBar: React.FC<SearchBarProps> = ({ books, setReadingList }) => {
  const handleChange = (newValue: any) => {
    const bookTitle = newValue.split(":")[0].trim();
    const updatedBook = books?.find((book) => book.title == bookTitle);
    if (updatedBook)
      setReadingList((previousList: any[]) => [...previousList, updatedBook]); //will fix the any type here
  };

  return (
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
  );
};

export default SearchBar;
