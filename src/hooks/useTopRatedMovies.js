import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const URL = "https://api.themoviedb.org/3/movie/top_rated";

    const getTopRatedMovies = async () =>{
        const res = await fetch(URL, TMDB_OPTIONS);
        const data = await res.json();
        dispatch(addTopRatedMovies(data.results));
    }

    useEffect(()=> {
        getTopRatedMovies();
    }, [])


}

export default useTopRatedMovies;