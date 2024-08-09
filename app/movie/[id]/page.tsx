"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { MovieDetailsProps } from "@/lib/types";
import Image from "next/image";
import { getDetails } from "@/utils/api";
import UserScore from "@/components/UserScore";
import UserActions from "@/components/UserActions";
import ShowTrailer from "@/components/ShowTrailer";

const TvShowDetailsPage = () => {
  const [data, setData] = useState<MovieDetailsProps | null>(null);
  const params = useParams() as { id: string };
  const media_type: string = "movie";
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
      <div className="w-full  mx-auto flex justify-center z-0 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title}
          width={300}
          height={400}
          className="w-full h-[60vh] object-cover object-right "
        />
        <div className="absolute w-full min-h-[60vh] bg-background opacity-70 z-10">
          <div className="container flex flex-row justify-start gap-10">
            <div className="h-auto py-6">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                width={300}
                height={400}
                className="rounded-xl shadow-lg hover:shadow-primary transition-all"
              />
            </div>
            <div className="w-2/3 text-secondary-foreground font-bold py-6 flex flex-col gap-3">
              <div>
                <h1 className=" text-2xl">
                  {data.original_title}{" "}
                  <span>( {data.release_date.slice(0, 4)} )</span>
                </h1>
                <p className="font-normal">
                  {data.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>

              <div className="flex justify-start items-center gap-4">
                User score <UserScore average={data.vote_average} />
              </div>

              <div className="flex flex-row gap-5 justify-start items-center">
                <span>
                  <UserActions />
                </span>
                <ShowTrailer />
              </div>

              <div>
                <h2 className="text-2xl">Overview</h2>
                <p className="text-justify font-normal">{data.overview}</p>
              </div>

              <div className="flex">
                <p className="text-justify font-normal">
                  Production companies:
                </p>
                <h2 className="">
                  {data.production_companies
                    .map((companie) => companie.name)
                    .join(" | ")}
                </h2>
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="text-2xl text-center">{data.runtime}</h2>
                  <p className="text-justify font-normal">Run time</p>
                </div>
                <div>
                  <h2 className="text-2xl text-center">{data.revenue}</h2>
                  <p className="text-justify font-normal">Revenue</p>
                </div>

                <div>
                  <h2 className="text-2xl text-center">{data.popularity}</h2>
                  <p className="text-justify font-normal">Popularity</p>
                </div>
                <div>
                  <h2 className="text-2xl">{data.tagline}</h2>
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
