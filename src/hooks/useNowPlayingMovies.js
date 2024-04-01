import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1' ;
    const dispatch = useDispatch();
  
    const getNowPlayingData = async () => {
       const data = await fetch(url, TMDB_OPTIONS);
       const json = await data.json();
       console.log(json.results);
       dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(() => {
        getNowPlayingData();
    }, [])
};

export default useNowPlayingMovies;