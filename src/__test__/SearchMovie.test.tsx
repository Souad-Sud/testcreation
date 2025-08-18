import { fireEvent, render, screen } from "@testing-library/react";
import SearchMovie from ".";
import { movies } from "@/data/movies";

describe("Test searchMovie component", () => {
  it("Renders the search input with correct placeholder and contain placeholder", () => {
    // here using typed props so onselectMovie is require when rendering
    render(
      <SearchMovie
        onSelectMovie={function (movie: (typeof movies)[0]): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const SearchMovieInputContent =
      screen.getByPlaceholderText("Search movies...");
    expect(SearchMovieInputContent).toBeInTheDocument();
    expect(SearchMovieInputContent).toHaveAttribute(
      "placeholder",
      "Search movies..."
    );
  });

  it("shows filtred movies when typing", () => {
     const movieToSelect = movies[0]
    // Here jest.fn() : create a facke function that can pass arround instead of a real one it does not do anything by default but records how it was called
    render(<SearchMovie onSelectMovie={jest.fn()} />);

    const SearchMovieInputContent =
      screen.getByPlaceholderText("Search movies...");
    fireEvent.change(SearchMovieInputContent, {
      target: { value: movieToSelect.name },
    });
    const movieItem = screen.getByText(movieToSelect.name);
    expect(movieItem).toBeInTheDocument();
    // check if the ul list exists
    const searchMovieList = screen.queryByRole("list");
    expect(searchMovieList).toBeInTheDocument();
  });

  it("call OnselectMovie and clears input when clicking a movie", () => {
    const onselectMovie = jest.fn();
    const movieToSelect = movies[0]
    render(<SearchMovie onSelectMovie={onselectMovie} />);
    const SearchMovieInputContent =
      screen.getByPlaceholderText("Search movies...");

    fireEvent.change(SearchMovieInputContent, { target: { value: movieToSelect.name } });
    const movieItem = screen.getByText(movieToSelect.name);
    fireEvent.click(movieItem);

    expect(onselectMovie).toHaveBeenCalledWith(
      expect.objectContaining({ name: movieToSelect.name })
    );

    expect(SearchMovieInputContent).toHaveValue("");
    // Test the fireList should disappear
    // const movieList = screen.queryByRole("list");
    // expect(movieList).not.toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("does not render list if search term is empty", () => {
    render(<SearchMovie onSelectMovie={jest.fn()} />);
    const searchMovieList = screen.queryByRole("list");
    expect(searchMovieList).not.toBeInTheDocument();
  });
});
