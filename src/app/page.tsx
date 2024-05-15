import PageWrapper from "@/components/PageWrapper"
import { MovieAPI } from "../api/api"
import TextInput from "@/components/TextInput"
import MoviesGrid from "@/components/MoviesGrid"
// import Image from 'next/image'

export default function Home({ title, movies }) {
  return (
    <>
      <PageWrapper>
        <h2 className="text-sm mb-[5px]">OMDB Movie Search</h2>
        <h1>Movies</h1>
        <div className="mb-[48px]">
          <TextInput />
        </div>
        <MoviesGrid />
      </PageWrapper>
    </>
  )
}

// export const getStaticProps = async () => {
//   try {
//     const movies = await MovieAPI.getMovies('lord of the rings')

//     return {
//       props:{
//         title: 'Homepage',
//         movies
//       }
//     }
//   }catch(err){
//     console.error(err)
//     return {
//       props:{

//       }
//     }
//   }
// }
