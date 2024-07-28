import { MovieCardProps } from "@/lib/types";

const MovieCard = ({
  original_title,
  poster_path,
  title,
  popularity,
  vote_average,
  vote_count,
}: MovieCardProps) => {
  return (
    <>
      <div className="border border-foreground rounded-lg overflow-clip">
        <img src={`${process.env.IMAGE_URl}${poster_path}`} alt={title} />

        <div className="p-2">
          <h2 className="font-bold">{original_title}</h2>
          <div className="flex flex-row items-center gap-1">
            <span className="px-2 py-1 border rounded-md border-primary">
              {popularity}{" "}
            </span>{" "}
            <span className="px-2 py-1 border rounded-md border-primary">
              {vote_average}{" "}
            </span>{" "}
            <span className="px-2 py-1 border rounded-md border-primary">
              {vote_count}{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
