import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyState from "../page-utils/EmptyState";
import { Book } from "src/types";
import { updateReadingList } from "src/helpers";

interface readingListProps {
  readingList: Book[];
  setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
}

const ReadingList: React.FC<readingListProps> = ({
  readingList,
  setReadingList,
}) => {
  const handleDelete = (deletedItem: Book) => {
    const updatedReadingList = updateReadingList(readingList, deletedItem);
    setReadingList(updatedReadingList);
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="px-2 py-2 flex-grow max-w-6xl border-2 border-secondary rounded-2xl">
        {!readingList?.length ? (
          <EmptyState />
        ) : (
          <div className="readingListContent flex-grow">
            <div className="readingListHeader text-primary text-lg underline mx-4">
              {" "}
              Reading List
            </div>
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
                        <img
                          src={`./${eachItem.coverPhotoURL}`}
                          alt="avatar icon"
                        />
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
        )}
      </div>
    </div>
  );
};

export default ReadingList;
