import MovieData from "@/data/temo.json";
import { MovieCardProps } from "@/lib/types";
import MovieCard from "./MovieCard";

const Movies = () => {
  return (
    <div>
      <h1>Now Playing</h1>
      <div className="grid grid-cols-5 gap-3">
        {MovieData.map((movie: MovieCardProps, i) => (
          <MovieCard
            key={i}
            adult={movie.adult}
            backdrop_path={movie.backdrop_path}
            genre_ids={movie.genre_ids}
            id={movie.id}
            original_language={movie.original_language}
            original_title={movie.original_title}
            overview={movie.overview}
            popularity={movie.popularity}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            title={movie.title}
            video={movie.video}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
