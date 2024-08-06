import { NowPlayingMovieCardProps } from "@/lib/types";
import MovieCard from "./MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

const NowPlaying = () => {
  return (
    <div className="container max-w-full">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-bold py-2">Now Playing</h1>

        <div className="flex flex-row gap-2 border rounded-lg py-2 px-4">
          <button type="button">Movies</button>
          <button type="button">Tv Shows</button>
        </div>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex flex-row basis-auto"></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default NowPlaying;
