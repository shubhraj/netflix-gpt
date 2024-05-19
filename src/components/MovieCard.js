import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({title, movieInfo}) => {
  if(!movieInfo.poster_path) return;
  return (
    <div className="w-36 md:w-48 pr-4" >
        <img alt="Movie Poster" 
             src={IMG_CDN_URL+movieInfo.poster_path}
        />
    </div>
  )
}

export default MovieCard