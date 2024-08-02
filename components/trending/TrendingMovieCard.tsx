import Image from "next/image";
import { TrendingProps } from "@/lib/types";
import Average from "../movies/Average";
import Link from "next/link";

const TrendingMovieCard = ({
  id,
  original_title,
  poster_path,
  title,
  vote_average,
  release_date,
  media_type,
  first_air_date,
  original_name,
}: TrendingProps) => {
  return (
    <div className="relative w-[179px]">
      <div className="border border-foreground rounded-xl z-0 ">
        <Link
          href={`/${media_type == "tv" ? "tv" : "movie"}/${id}`}
          className="w-44 h-fit rounded-xl"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={400}
            height={300}
            className="rounded-xl"
          />
        </Link>
      </div>

      <div className="absolute -mt-9  -left-[3px] z-50 inline-block bg-background rounded-full">
        <Average average={vote_average} />
      </div>

      <div className="p-2">
        <h2 className="font-bold text-sm">
          {original_title} {original_name}
        </h2>
        <h2 className="font-bold text-sm">
          {release_date} {first_air_date}
        </h2>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
