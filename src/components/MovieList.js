import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="px-6 bg-transparent">
        <h1 className="text-xl md:text-3xl py-4 text-white ">{title}</h1>        
        <div className="flex overflow-x-scroll">
            <div className="flex">
            { movies.map((movie) => (
                 <MovieCard key={movie.id} title={title} movieInfo={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
