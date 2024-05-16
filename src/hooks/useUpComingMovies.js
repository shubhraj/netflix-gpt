import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpComingMovies = () => {
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    const dispatch = useDispatch();
    const URL = "https://api.themoviedb.org/3/movie/upcoming";

    const getMovies = async () => {
        const res = await fetch(URL, TMDB_OPTIONS);
        const data = await res.json();
        dispatch(addUpComingMovies(data.results));
    }

    useEffect(() => {
       !upcomingMovies && getMovies();
    },[])
}

export default useUpComingMovies;