import { fireEvent, render, screen } from "@testing-library/react";
import MoviePage from "../components/MoviePage";
import { movies } from "@/data/movies";

// mock children
jest.mock("../HomePresentation", () => () => <div>Mock HomePresentation</div>);
jest.mock("../MovieDetails", () => ({ movie, onClose }: any) => (
  <div>
    Mock MovieDetails: {movie.name}
    <button onClick={onClose}>Close</button>
  </div>
));

describe("MoviePage", () => {
  it("renders HomePresentation and the movie list initially", () => {
    render(<MoviePage />);

    const homePresentation = screen.getByText("Mock HomePresentation");
    expect(homePresentation).toBeInTheDocument();

    // The movie list should render some movie names
    movies.forEach((movie) => {
      expect(screen.getByText(movie.name)).toBeInTheDocument();
    });
  });

  it("shows MovieDetails when a movie is clicked", () => {
    render(<MoviePage />);
    const moviesSelect = movies[0];
    // Click on the first movie
    fireEvent.click(screen.getByText(moviesSelect.name));

    // Now MovieDetails mock should be rendered
    expect(
      screen.getByText(`Mock MovieDetails: ${moviesSelect.name}`)
    ).toBeInTheDocument();
  });

  it("returns to initial state when closing MovieDetails", () => {
    render(<MoviePage />);
    const moviesSelect = movies[0];
    fireEvent.click(screen.getByText(moviesSelect.name));
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    // Back to initial state
    expect(screen.getByText("Mock HomePresentation")).toBeInTheDocument();
    expect(screen.getByText(moviesSelect.name)).toBeInTheDocument();
  });
});
