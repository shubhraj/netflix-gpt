import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const dispatch = useDispatch();
    const URL = "https://api.themoviedb.org/3/movie/top_rated";

    const getTopRatedMovies = async () =>{
        const res = await fetch(URL, TMDB_OPTIONS);
        const data = await res.json();
        dispatch(addTopRatedMovies(data.results));
    }

    useEffect(()=> {
       !topRatedMovies && getTopRatedMovies();
    }, [])


}

export default useTopRatedMovies;