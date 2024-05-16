import Movie from "@/interfaces/movie"
import MovieCard from "./MovieCard"

interface MoviesGridProps {
  movies: Movie[]
}

export default function MoviesGrid(props: MoviesGridProps) {
  const { movies } = props
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movieData={movie} />
        ))}
      </div>
      <button className="btn btn-primary">Load more</button>
    </div>
  )
}
