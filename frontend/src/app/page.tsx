"use client";

import React, { useEffect, useState } from "react";
import useBooksData from "../hooks/useBooksData";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

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

const Search = () => {};
interface readingListProps {
  //integrate this interface with the other interface
  readingList: Array<Record<string, string>>;
  filterReadingList: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
}

//TODO: ensure reading list can only be populated with one item at a time
//reavamp file structure
//enhance error handling for all components and fetch calls
//change fetch to use SWR
//add tests
//add loading states
//add empty states
//misc: add dark mode

const ReadingList: React.FC<readingListProps> = ({
  readingList,
  filterReadingList,
}) => {
  const handleDelete = (deletedItem: any) => {
    const updatedReadingList = readingList.filter(
      (itemsToFilter) => itemsToFilter.title !== deletedItem.title
    );
    filterReadingList(updatedReadingList);
  };

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Reading List
      </Typography>
      <List dense={false}>
        {readingList.map((eachItem) => {
          return (
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(eachItem)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={`./${eachItem.coverPhotoURL}`} alt="" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={eachItem.title}
                secondary={`by ${eachItem.author}`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default function Home() {
  const [readingList, setReadingList] = useState<Array<Record<string, string>>>( //should adjust this to a set to disallow multiple values in the set, or set a validator for duplicate values, or create a dedup function
    []
  );
  const { data, isLoading, error } = useBooksData();

  if (isLoading) return <h1>Loading data...</h1>;

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <SearchBar books={data} setReadingList={setReadingList} />
      </div>
      <div>
        <ReadingList
          readingList={readingList}
          filterReadingList={setReadingList}
        />
      </div>
    </div>
  );
}
