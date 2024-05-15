import axios from 'axios'
import {Movie} from "@/interfaces/movie"

const omdbBaseURL = process.env.OMDB_API_URL
const omdbApiKey = process.env.OMDB_API_KEY
const omdbUserID = process.env.OMDB_USER_ID

const api  = axios.create({
    baseURL: omdbBaseURL,
    params:{
        apikey: omdbApiKey,
        i: omdbUserID
    }
})

interface SearchResponse {
    totalResults: number
    searchResults: Movie[]
    error?: string
}

export const MovieAPI = {
    //todo: fix this type
    async getMovies(searchQuery: string = ''): Promise<SearchResponse> {
        try {
            console.log(omdbApiKey, omdbUserID)
            const {data} = await api.get('/',{
                params: {
                    s: searchQuery,
                    type: 'movie'
                }
            })
            if(data.Response === 'True'){
                return {
                    totalResults: data.totalResults,
                    searchResults: data.Search
                }
            } 

            throw new Error(`Could find movies with search: ${searchQuery}`)
        }
        catch( error){
            console.error(error)
            return {
                totalResults: 0,
                searchResults: [],
                error
            }
        }
    }
}