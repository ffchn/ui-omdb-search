import axios from "axios"
import Movie from "@/interfaces/movie"

const omdbBaseURL = process.env.OMDB_API_URL
const omdbApiKey = process.env.OMDB_API_KEY
const omdbUserID = process.env.OMDB_USER_ID

const api = axios.create({
  baseURL: omdbBaseURL,
  params: {
    apikey: omdbApiKey,
    i: omdbUserID,
  },
})

export interface SearchResponse {
  totalResults: number
  searchResults: Movie[]
  error?: string
}

export const MovieAPI = {
  //todo: fix this type
  async getMovies(searchQuery: string = ""): Promise<SearchResponse> {
    try {
      console.log(omdbApiKey, omdbUserID)
      const { data } = await api.get("/", {
        params: {
          s: searchQuery,
          type: "movie",
        },
      })

      if (data.Response !== "True") {
        throw new Error("Could not retrieve search results")
      }

      return {
        totalResults: data.totalResults,
        searchResults: data.Search,
      }
    } catch (error) {
      console.error(error)
      return {
        totalResults: 0,
        searchResults: [],
        error: `Coudln't Retrieve movies from api. Error: ${error}`,
      }
    }
  },
}
