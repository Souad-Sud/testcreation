import { fireEvent, render, screen, within } from "@testing-library/react";
import DisplayRandomMovies from ".";
import { movies } from "@/data/movies";

describe("Test DisplayRandomMovies component", () => {
  it("renders movie images with correct src and alt and calls onselect when clicked ", () => {
    const onSelectMovie = jest.fn();
    const movieToSelect = movies[0];
    render(
      <DisplayRandomMovies
        displayMovies={movies}
        onSelectMovie={onSelectMovie}
      />
    );
    // get the first movie image by alt
    const displayRandomMovieImage = screen.getAllByAltText(movieToSelect.name);
    const firstMovieImage = displayRandomMovieImage[0];

    expect(firstMovieImage).toHaveAttribute("src", movieToSelect.image);
    fireEvent.click(firstMovieImage);
    expect(onSelectMovie).toHaveBeenCalledWith(movieToSelect);
  });

  it("renders ul and it's li  with correct content ", () => {
    const onSelectMovie = jest.fn();
    render(
      <DisplayRandomMovies
        displayMovies={movies}
        onSelectMovie={onSelectMovie}
      />
    );
    const displayRandomMovieContainer = screen.getAllByTestId("movie");

    // check that at least one container exists
    expect(displayRandomMovieContainer.length).toBeGreaterThan(0);
    const firsMovieContainer = displayRandomMovieContainer[0];
    const displayRandomMovieImageDetails =
      within(firsMovieContainer).getByRole("list");
    expect(displayRandomMovieImageDetails).toBeInTheDocument();
    // check the content of the ul
    const movieToSelect = movies[0];

    expect(screen.getByText(movieToSelect.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Released : ${movieToSelect.releaseDate}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Actors : ${movieToSelect.mainActors.join(", ")}`)
    ).toBeInTheDocument();
  });
});
