import Image from "next/image";
import { MovieCardProps } from "@/lib/types";
import Average from "./Average";

const MovieCard = ({
  original_title,
  poster_path,
  title,
  vote_average,
  release_date,
}: MovieCardProps) => {
  return (
    <div className="relative">
      <div className="border border-foreground rounded-xl z-0 ">
        <div className="w-44 h-fit rounded-xl">
          <Image
            src={`${process.env.IMAGE_URl}${poster_path}`}
            alt={title}
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="absolute bottom-[93px] -left-[3px] z-50 inline-block bg-background rounded-full">
        <Average average={vote_average} />
      </div>

      <div className="p-2">
        <h2 className="font-bold text-sm">{original_title}</h2>
        <h2 className="font-bold text-sm">{release_date}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
