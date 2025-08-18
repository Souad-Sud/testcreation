import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "./"; // adjust import based on your file structure
import { movies } from "@/data/movies";

// Mock child components since you only care about HomePage logic
jest.mock("../HomePresentation", () => () => <div>Mock HomePresentation</div>);
jest.mock("../DisplayRandomMovies", () => ({ onSelectMovie, displayMovies }: any) => (
  <div>
    Mock DisplayRandomMovies
    <button onClick={() => onSelectMovie(displayMovies[0])}>Select {displayMovies[0].name}</button>
  </div>
));

describe("HomePage component", () => {
  it("renders HomePresentation and DisplayRandomMovies initially", () => {
    render(<HomePage />);
    const homePresentation = screen.getByText("Mock HomePresentation");
    expect(homePresentation).toBeInTheDocument();

    const displayRandomMovies = screen.getByText("Mock DisplayRandomMovies");
    expect(displayRandomMovies).toBeInTheDocument()
  });

  it("shows selected movie details when a movie is selected", () => {
    render(<HomePage />);
    const moviesSelect = movies[0];
    fireEvent.click(screen.getByText(`Select ${moviesSelect.name}`));

    const movieHeader = screen.getByRole("heading", {name: moviesSelect.name});
    expect(movieHeader).toBeInTheDocument();

    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument()

  });

  it("returns to initial state when clicking Close", () => {
    render(<HomePage />);
      const moviesSelect = movies[0];
    fireEvent.click(screen.getByText(`Select ${moviesSelect.name}`));
    fireEvent.click(screen.getByText("Close"));

    const homePresentation = screen.getByText("Mock HomePresentation");
    expect(homePresentation).toBeInTheDocument();

    const displayRandomMovies = screen.getByText("Mock DisplayRandomMovies");
    expect(displayRandomMovies).toBeInTheDocument();

    expect(screen.queryByRole("heading", { name: moviesSelect.name })).not.toBeInTheDocument();
  });
});
