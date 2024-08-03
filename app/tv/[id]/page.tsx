"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { TVShowDetailsProps } from "@/lib/types";
import Image from "next/image";
import { getDetails } from "@/utils/api";
import UserScore from "@/components/UserScore";
import UserActions from "@/components/UserActions";

const TvShowDetailsPage = () => {
  const [data, setData] = useState<TVShowDetailsProps | null>(null);
  const params = useParams() as { id: string };
  const media_type: string = "tv";
  const id: number = parseInt(params.id);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (media_type && id) {
          const data = await getDetails(media_type, id);
          setData(data);
        }
      } catch (error) {
        console.error("Failed to fetch details:", error);
      }
    };
    fetchDetails();
  }, [media_type, id]);

  if (!data) {
    return <div className="container h-[80vh]">Loading...</div>;
  }

  return (
    <div>
      <div className="w-full max-h-[80vh] mx-auto flex justify-center z-0 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.name}
          width={300}
          height={400}
          className="w-full h-auto object-cover object-right "
        />
        <div className="absolute w-full h-[80vh] bg-background opacity-70 z-10">
          <div className="container flex flex-row justify-start gap-10">
            <div className="h-auto py-6">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.name}
                width={300}
                height={400}
                className="rounded-xl shadow-lg hover:shadow-primary transition-all"
              />
            </div>
            <div className="w-2/3 text-secondary-foreground font-bold py-6 flex flex-col gap-3">
              <div>
                <h1 className=" text-2xl">
                  {data.original_name}{" "}
                  <span>( {data.first_air_date.slice(0, 4)} )</span>
                </h1>
                <p className="font-normal">
                  {data.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>

              <div className="flex justify-start items-center gap-4">
                User score <UserScore average={data.vote_average} />
              </div>

              <div>
                <UserActions />
              </div>

              <div>
                <h2 className="text-2xl">Overview</h2>
                <p className="text-justify font-normal">{data.overview}</p>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="text-2xl">{data.created_by[0].name}</h2>
                  <p className="text-justify font-normal">Creator</p>
                </div>

                <div>
                  <h2 className="text-2xl text-center">
                    {data.number_of_seasons}
                  </h2>
                  <p className="text-justify font-normal">Seasons</p>
                </div>
                <div>
                  <h2 className="text-2xl text-center">
                    {data.number_of_episodes}
                  </h2>
                  <p className="text-justify font-normal">Episodes</p>
                </div>

                <div>
                  <h2 className="text-2xl text-center">{data.popularity}</h2>
                  <p className="text-justify font-normal">Popularity</p>
                </div>

                <div>
                  <h2 className="text-2xl text-center">
                    {data.networks.map((genre) => genre.name).join(", ")}
                  </h2>
                  <p className="text-justify font-normal">Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowDetailsPage;
