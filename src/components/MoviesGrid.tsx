"use client"

import Movie from "@/interfaces/movie"
import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import MovieAPI from "@/services/api"

interface MoviesGridProps {
  movies: Movie[]
  pages: number
}

export default function MoviesGrid({ movies, pages }: MoviesGridProps) {
  const searchParams = useSearchParams()
  const search = searchParams.get("search") || ""
  const page = searchParams.get("page") || "1"
  const [isLoading, setLoading] = useState<boolean>(false)
  const [movieList, setMovieList] = useState<Movie[]>(movies)
  const [currentPage, setCurrentPage] = useState<number>(Number(page))

  async function fetchMoreMovies() {
    try {
      setLoading(true)
      const data = await MovieAPI.getMovies(search, currentPage + 1)
      if (!data) {
        throw new Error("Error fetching movies")
      }
      setCurrentPage(currentPage + 1)
      setMovieList((state) => [...state, ...data.searchResults])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setMovieList(movies)
  }, [movies])

  const hasMoreMovies = currentPage < pages

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4 mb-10">
        {movieList.map((movie, index) => (
          <div key={movie.imdbID} data-test={`movie-card-${index + 1}`}>
            <MovieCard movieData={movie} />
          </div>
        ))}
      </div>
      {hasMoreMovies && (
        <button
          data-test="button-load-more"
          className="btn btn-primary text-white min-w-[200px]"
          onClick={fetchMoreMovies}
        >
          {isLoading ? (
            <span className="loading loading-spinner" />
          ) : (
            "Load more"
          )}
        </button>
      )}
    </div>
  )
}
