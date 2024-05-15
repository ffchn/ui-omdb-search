import PageWrapper from "@/components/PageWrapper"
import { MovieAPI, SearchResponse } from "../api/api"
import TextInput from "@/components/TextInput"
import MoviesGrid from "@/components/MoviesGrid"
// import Image from 'next/image'

export default async function Home() {
  const data = await getData()
  const { searchResults, totalResults } = data
  return (
    <>
      <PageWrapper>
        <h2 className="text-sm mb-[5px]">OMDB Movie Search</h2>
        <h1>Movies</h1>
        <div className="mb-10 md:w-1/4">
          <TextInput />
        </div>
        <MoviesGrid movies={searchResults} totalResults={totalResults} />
      </PageWrapper>
    </>
  )
}

async function getData(): Promise<SearchResponse> {
  try {
    const search = await MovieAPI.getMovies("lord of the rings")
    if (search.error) {
      throw new Error("Error searching movies")
    }

    const { searchResults, totalResults } = search

    return {
      searchResults: searchResults,
      totalResults: totalResults,
    }
  } catch (err) {
    console.error(err)
    return {
      searchResults: [],
      totalResults: 0,
    }
  }
}
