import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

  const {movieResults, movieNames } = useSelector(store => store.gpt);
  if(!movieNames) return null;
  if(!movieResults) return null;
  

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90"> 
      <div>
          {movieNames.map((movie, index) =>  <MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestions;