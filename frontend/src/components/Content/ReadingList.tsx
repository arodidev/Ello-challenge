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

const EmptyState = () => {
  return (
    <div className="readingListHeader flex text-emptyState text-2xl mx-4 justify-center">
      <p>
        Your reading list is empty. Please select items from the search box
        above.
      </p>
    </div>
  );
};

const ReadingList: React.FC<readingListProps> = ({
  readingList,
  filterReadingList,
}) => {
  const handleDelete = (deletedItem: any) => {
    //add type checking here
    const updatedReadingList = readingList.filter(
      (itemsToFilter) =>
        !(
          itemsToFilter.title == deletedItem.title &&
          itemsToFilter.author == deletedItem.author
        )
    );
    filterReadingList(updatedReadingList);
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