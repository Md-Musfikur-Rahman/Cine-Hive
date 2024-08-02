"use client";
import { useState, useEffect } from "react";
import { getTrending } from "@/utils/api";
import { TrendingMovieCard } from ".";
import { TrendingProps } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

const TrendingAll = () => {
  const [movieData, setMovieData] = useState<TrendingProps[]>([]);
  const [timeFrame, setTimeFrame] = useState<"day" | "week">("day");

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrending("all", timeFrame);
        setMovieData(data);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, [timeFrame]);

  return (
    <Tabs defaultValue="account" className="container w-full">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-bold py-2">Trending All</h1>

        <TabsList>
          <TabsTrigger value="account" onClick={() => setTimeFrame("day")}>
            Day
          </TabsTrigger>
          <TabsTrigger value="password" onClick={() => setTimeFrame("week")}>
            Week
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="account">
        <Carousel>
          <CarouselContent>
            {movieData.map((movie: TrendingProps, i) => (
              <CarouselItem key={i} className="flex flex-row basis-auto">
                <TrendingMovieCard
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
      </TabsContent>
      <TabsContent value="password">
        <Carousel>
          <CarouselContent>
            {movieData.map((movie: TrendingProps, i) => (
              <CarouselItem key={i} className="flex flex-row basis-auto">
                <TrendingMovieCard
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
      </TabsContent>
    </Tabs>
  );
};

export default TrendingAll;
