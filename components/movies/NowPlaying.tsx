"use client";
import { useState, useEffect } from "react";
import { getMovieLists } from "@/utils/api";
import { TrendingProps } from "@/lib/types";
import MovieCard from "./MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

type cata = "now_playing" | "popular" | "top_rated" | "upcoming";

const NowPlaying = ({ listName }: { listName: cata }) => {
  const [movieData, setMovieData] = useState<TrendingProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMovieLists("movie", listName);
        setMovieData(data);
      } catch (error) {
        setError("Failed to fetch movies");
        console.error("Failed to fetch movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [listName]);

  if (isLoading) {
    return (
      <div className="container max-w-full">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-xl font-bold py-2">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-full">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-xl font-bold py-2 text-red-500">{error}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-full">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-bold py-2">
          {listName.replace("_", " ").toUpperCase()}
        </h1>
      </div>
      <Carousel>
        <CarouselContent>
          {movieData.map((movie: TrendingProps, i) => (
            <CarouselItem key={i} className="flex flex-row basis-auto">
              <MovieCard
                id={movie.id}
                original_title={movie.original_title}
                original_name={movie.original_name}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                first_air_date={movie.first_air_date}
                title={movie.title}
                vote_average={movie.vote_average}
                media_type={movie.media_type}
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

export default NowPlaying;
