import Movie from "@/interfaces/movie"
import MovieCard from "./MovieCard"

interface MoviesGridProps {
  movies: Movie[]
}

export default function MoviesGrid(props: MoviesGridProps) {
  const { movies } = props
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movieData={movie} />
      ))}
    </div>
  )
}
