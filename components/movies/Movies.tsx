import MovieData from "@/data/temo.json";
import { MovieCardProps } from "@/lib/types";
import MovieCard from "./MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

const Movies = () => {
  return (
    <div className="max-w-full">
      <h1 className="text-xl font-bold py-2">Now Playing</h1>
      <Carousel>
        <CarouselContent>
          {MovieData.map((movie: MovieCardProps, i) => (
            <CarouselItem key={i} className="flex flex-row basis-auto">
              <MovieCard
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Movies;
