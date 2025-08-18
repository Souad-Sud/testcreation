import { fireEvent, render, screen } from "@testing-library/react";
import { movies } from "@/data/movies";
import MovieDetails from "@/components/MovieDetails";

describe("MovieDetails component", () => {
  const movie = movies[0];
  // create fack function
  const onclose = jest.fn();
  beforeEach(() => {
    render(<MovieDetails movie={movie} onClose={onclose} />);
  });
  it("renders movie name, description, release date and actors", () => {
    // by name
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${movie.description.substring(0, 100)}...`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Released: ${movie.releaseDate}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Actors: ${movie.mainActors.join(", ")}`)
    ).toBeInTheDocument();
  });

  it("render the movie image with the correct src and alt", () => {
    const img = screen.getByAltText(movie.name) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(movie.image);
  });

  it("calls onclose when back button is clicked", () => {
    const button = screen.getByRole("button", { name: /Back/i });
    fireEvent.click(button);
    expect(onclose).toHaveBeenCalled();
  });
});
