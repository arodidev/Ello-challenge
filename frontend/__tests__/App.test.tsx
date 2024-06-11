import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "../src/app/page";
import useBooksData from "../src/hooks/useBooksData";

jest.mock("../src/hooks/useBooksData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("App component", () => {
  const user = userEvent.setup();

  (useBooksData as jest.Mock).mockReturnValue({
    data: [
      {
        author: "mockAuthor",
        title: "Mocked Book 1",
        coverPhotoURL: "./assets/img.jpg",
        __typename: "book",
      },
      {
        author: "mockAuthor",
        title: "Mocked Book 2",
        coverPhotoURL: "./assets/img.jpg",
        __typename: "book",
      },
    ],
    error: null,
    isLoading: false,
  });

  it("should display an empty state by default", () => {
    render(<App />);

    const emptyStateText = screen.getByText(
      /your reading list is empty\. please select items from the search box above\./i
    );

    expect(emptyStateText).toBeInTheDocument();
  });

  it("should show books as list items when the dropdown is clicked", async () => {
    render(<App />);

    const searchInput = screen.getByRole("combobox", {
      name: /select item to add to reading list/i,
    });

    const dropdownButton = screen.getByRole("button", {
      name: /open/i,
    });

    expect(searchInput).toBeInTheDocument();
    expect(dropdownButton).toBeInTheDocument();

    user.click(dropdownButton);

    const listItem1 = await screen.findByText(/Mocked Book 1 : mockAuthor/i);
    const listItem2 = await screen.findByText(/Mocked Book 2 : mockAuthor/i);

    expect(listItem1).toBeInTheDocument();
    expect(listItem2).toBeInTheDocument();
  });
});
