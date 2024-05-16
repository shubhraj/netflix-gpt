import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?page=1' ;
    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const res = await fetch(url, TMDB_OPTIONS);
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
    }

    useEffect(()=> {
        !popularMovies && getPopularMovies();
    },[]);
    
}

export default usePopularMovies;