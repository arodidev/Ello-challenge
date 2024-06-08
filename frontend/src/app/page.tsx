"use client";

import React, { useState } from "react";
import useBooksData from "./hooks/useBooksData";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

interface SearchBarProps {
  books: Array<Record<string, string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ books }) => {
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={books.map((option) => `${option.title} by ${option.author}`)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

const ReadingList = () => {
  const [readingList, setReadingList] = useState([]);

  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Reading List
      </Typography>
      <List dense={false}>
        {generate(
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary={"Secondary text"}
            />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default function Home() {
  const { data, isLoading, error } = useBooksData();

  if (isLoading) return <h1>Loading data...</h1>;
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <SearchBar books={data} />
      </div>
      <div>
        <ReadingList />
      </div>
    </div>
  );
}
