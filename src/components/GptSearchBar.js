import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { TMDB_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";


const GptSearchBar = () => {
  const locale = useSelector(store => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma separated like the example results give ahead. Example Results : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"; 
        //make an API call to OPENAI GPT API and get Movie results 
        
        // following block returns : Error: 429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors
        // So I am hardcoding the results as : 

        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery}],
        //     model: 'gpt-3.5-turbo',
        //   });   
          
        //console.log(gptResults.choices);
        // if(gptResults?.choices) { TODO : Handle Error }
        const dummyGPTResults = "Andaz Apna Apna, Chupke Chupke, Padosan, Chalti Ka Naam Gaadi, Hera Pheri";
        const moviesList = dummyGPTResults.split(",");
        const movieDataPromises = moviesList.map(movie => searchMovieTMDB(movie));
        const tmdbData = await Promise.all(movieDataPromises);
        console.log(tmdbData);
        dispatch(addGptMovieResults({movieNames: moviesList, movieResults : tmdbData}));

  } 

  const searchMovieTMDB = async (movie) => {
    const url = 'https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1';
    const res =  await fetch(url, TMDB_OPTIONS);
    const data = await res.json();
    return data.results;
  }

  return (
    <div className="pt-[10%] flex justify-center">
        <form className=" bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=> e.preventDefault()} >
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9 text-black" placeholder={language[locale].gptSearchPlaceholder}></input>
            <button className="py-2 px-4 bg-red-700 text-white rounded col-span-3 m-2" onClick={handleGptSearchClick}> {language[locale].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar;