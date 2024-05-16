import Movie from "@/interfaces/movie"

const omdbBaseURL = process.env.OMDB_API_URL
const omdbApiKey: string = process.env.OMDB_API_KEY || ""

export interface SearchResponse {
  totalResults: number
  searchResults: Movie[]
  error?: string
}

export const MovieAPI = {
  async getMovies(
    searchQuery: string,
    page: number = 1
  ): Promise<SearchResponse> {
    const searchParams = new URLSearchParams({
      apikey: omdbApiKey,
      s: searchQuery,
      page: page.toString(),
    })

    const res = await fetch(`${omdbBaseURL}?${searchParams}`, {
      next: { revalidate: 3600 }, //caches data and revalidates every hour
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await res.json()

    return {
      totalResults: data.totalResults,
      searchResults: data.Search,
    }
  },
}
