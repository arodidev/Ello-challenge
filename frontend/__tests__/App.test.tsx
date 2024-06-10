import { render, screen } from "@testing-library/react";
import App from "../src/app/page";
import useBooksData from "../src/hooks/useBooksData";

jest.mock("../src/hooks/useBooksData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("App component", () => {
  (useBooksData as jest.Mock).mockReturnValue([
    {
      author: 1,
      title: "Mocked Book 1",
      coverPhotoURL: "./assets/img.jpg",
      __typename: "book",
    },
    {
      author: 2,
      title: "Mocked Book 2",
      coverPhotoURL: "./assets/img.jpg",
      __typename: "book",
    },
  ]);

  it("should render the root component", () => {
    render(<App />);
  });
});
