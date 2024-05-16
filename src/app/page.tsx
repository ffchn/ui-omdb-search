import PageWrapper from "@/components/PageWrapper"
import { MovieAPI, SearchResponse } from "../api/api"
import TextInput from "@/components/TextInput"
import MoviesGrid from "@/components/MoviesGrid"

interface HomeProps {
  searchParams?: { search?: string; page?: string }
}

export default async function Home({ searchParams }: HomeProps) {
  const searchQuery = searchParams?.search || ""
  const page = Number(searchParams?.page || "1")
  const data = await getData(searchQuery, page)

  const { searchResults, totalResults } = data
  const pages = totalResults > 0 ? Math.ceil(totalResults / 6) : 0
  console.log(pages)
  return (
    <>
      <PageWrapper>
        <h2 className="text-sm mb-[5px]">OMDB Movie Search</h2>
        <h1>Movies</h1>
        <div className="mb-10 md:w-1/4">
          <TextInput />
        </div>
        <h6 className="mb-4 text-white">{totalResults} Results</h6>
        {totalResults > 0 ? (
          <MoviesGrid movies={searchResults} />
        ) : (
          <h5>No results found with </h5>
        )}
      </PageWrapper>
    </>
  )
}

async function getData(searchQuery: string, page: number) {
  const data = await MovieAPI.getMovies(searchQuery, page)
  return data
}
