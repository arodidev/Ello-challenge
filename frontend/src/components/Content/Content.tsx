import { Book } from "src/types";
import ReadingList from "./ReadingList";
import SearchBar from "./SearchBar";

interface ContentProps {
  data: Book[];
  readingList: Book[];
  setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
}

const Content: React.FC<ContentProps> = ({
  data,
  readingList,
  setReadingList,
}) => {
  return (
    <div className="page-content flex-grow mx-8 my-4">
      <SearchBar
        books={data}
        readingList={readingList}
        setReadingList={setReadingList}
      />
      <ReadingList readingList={readingList} setReadingList={setReadingList} />
    </div>
  );
};

export default Content;
