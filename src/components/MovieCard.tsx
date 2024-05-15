import Movie from "@/interfaces/movie"
import Image from "next/image"

interface MovieDataProps {
  movieData: Movie
}

export default function MovieCard(props: MovieDataProps) {
  const { Title, Poster, Year, imdbID } = props.movieData
  return (
    <div className="bg-primary cursor-pointer rounded-[8px] w-full h-[400px] lg:h-[500px] cursor-pointer relative overflow-hidden hover:scale-105 duration-300 border-2 border-transparent hover:border-primary">
      <Image
        src={Poster}
        fill
        alt={`${Title} poster`}
        loading="lazy"
        className="m-0 object-cover rounded-4"
      />
      <div className="absolute flex flex-col justify-center bg-opacity-90 bg-black bottom-0 w-full px-5 py-3 flex flex-start h-30">
        <h4 className="mt-0 text-white line-clamp-2">{Title}</h4>
        <div className="flex flex-row justify-between items-center">
          <span>{Year}</span>
          <button className="btn btn-primary text-white">See more</button>
        </div>
      </div>
    </div>
  )
}
