"use client";

import { useState } from "react";
import { movies } from "@/data/movies";
import HomePresentation from "@/components/HomePresentation";
import SearchMovie from "@/components/SearchMovie";
import MovieDetails from "@/components/MovieDetails";
import DisplayRandomMovies from "@/components/DisplayRandomMovies";
import "./globals.css";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<null | (typeof movies)[0]>(
    null
  );

  return (
    <div className="mt-10">
      <SearchMovie onSelectMovie={setSelectedMovie} />
      <div className="flex justify-center items-center min-h-screen mt-10">
        <main className="flex flex-col md:flex-row gap-10  p-10 rounded-lg">
          <div className="flex-1">
            {!selectedMovie ? (
              <HomePresentation />
            ) : (
              <MovieDetails
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
              />
            )}
          </div>

          <div className="flex-1">
            <DisplayRandomMovies
              onSelectMovie={setSelectedMovie}
              displayMovies={movies}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
