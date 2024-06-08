import {
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface readingListProps {
  readingList: Array<Record<string, string>>;
  filterReadingList: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
}

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

export default ReadingList;
