import MovieCard from "./MovieCard"

export default function MoviesGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}
