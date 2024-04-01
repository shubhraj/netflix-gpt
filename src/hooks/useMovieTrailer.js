import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  const getVideoData = async () => {
    const respoonse = await fetch(URL, TMDB_OPTIONS);
    const data = await respoonse.json();

    let trailerData = data.results.filter((item) => {
      return item.type === "Trailer";
    });
    const trailer = trailerData.length ? trailerData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideoData();
  }, []);
};

export default useMovieTrailer;
