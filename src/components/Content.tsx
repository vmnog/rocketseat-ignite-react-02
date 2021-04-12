import { MovieCard } from "./MovieCard";

import IGenreResponseDTO from "../dtos/IGenreResponseDTO";
import IMovieDTO from "../dtos/IMovieDTO";
import { Header } from "./Header";

interface ContentProps {
  selectedGenre: IGenreResponseDTO;
  movies: IMovieDTO[]
}

export function Content({selectedGenre, movies}: ContentProps) {
  return (
  <div className="container">
    <Header title={selectedGenre} />

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}