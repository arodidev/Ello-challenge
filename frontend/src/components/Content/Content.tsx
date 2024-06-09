import ReadingList from "./ReadingList";
import SearchBar from "./SearchBar";

interface ContentProps {
  data: Array<Record<string, string>>;
  readingList: Array<Record<string, string>>;
  setReadingList: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
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
      <ReadingList
        readingList={readingList}
        filterReadingList={setReadingList}
      />
    </div>
  );
};

export default Content;
