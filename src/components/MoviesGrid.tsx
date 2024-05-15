import Movie from "@/interfaces/movie"
import MovieCard from "./MovieCard"

interface MoviesGridProps {
  movies: Movie[]
  totalResults: number
}

export default function MoviesGrid(props: MoviesGridProps) {
  const { totalResults, movies } = props
  return (
    <>
      <h6 className="mb-4 text-white">{totalResults} Results</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4">
        {movies.length >= 1 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movieData={movie} />
          ))
        ) : (
          <>
            <h5>No movies found with search &quot;adsadas&quot;</h5>
          </>
        )}
      </div>
    </>
  )
}
