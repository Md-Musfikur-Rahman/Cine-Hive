"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { MovieDetailsProps } from "@/lib/types";
import Image from "next/image";
import { getDetails, getCredits, getSimilar } from "@/utils/api";
import UserScore from "@/components/UserScore";
import UserActions from "@/components/UserActions";
import ShowTrailer from "@/components/ShowTrailer";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const MovieDetailsPage = () => {
  const [data, setData] = useState<MovieDetailsProps | null>(null);
  const [cast, setCast] = useState<any[]>([]);
  const [similar, setSimilar] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams() as { id: string };
  const media_type: string = "movie";
  const id: number = parseInt(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (media_type && id) {
          const [detailsData, creditsData, similarData] = await Promise.all([
            getDetails(media_type, id),
            getCredits(media_type, id),
            getSimilar(media_type, id),
          ]);
          setData(detailsData);
          setCast(creditsData.cast.slice(0, 10));
          setSimilar(similarData.results.slice(0, 6));
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [media_type, id]);

  if (loading) {
    return (
      <div className="min-h-screen pb-12">
        <div className="w-full h-[60vh] relative">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="container -mt-[25vh] relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <Skeleton className="h-[450px] w-[300px] rounded-xl shrink-0" />
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-10 w-3/4" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
              </div>
              <Skeleton className="h-6 w-1/2" />
              <div className="space-y-3">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-24 w-full" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className="container py-8">Failed to load movie details.</div>;
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/40" />
      </div>

      <div className="container -mt-[50vh] relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0">
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              width={300}
              height={450}
              className="rounded-xl shadow-xl hover:shadow-primary transition-all"
              priority
            />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl font-bold">
                {data.title}{" "}
                <span className="text-muted-foreground">
                  ({data.release_date?.slice(0, 4)})
                </span>
              </h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.genres.map((genre) => (
                  <Badge key={genre.id} variant="secondary">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <UserScore average={data.vote_average} />
                <span className="text-lg">User Score</span>
              </div>
              <UserActions />
              <ShowTrailer id={data.id} media_type="movie" />
            </div>

            {data.tagline && (
              <p className="text-xl italic text-muted-foreground">
                {data.tagline}
              </p>
            )}

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-lg leading-relaxed">{data.overview}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-semibold">Status</h3>
                <p>{data.status}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Runtime</h3>
                <p>{data.runtime} minutes</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Budget</h3>
                <p>${data.budget?.toLocaleString()}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Revenue</h3>
                <p>${data.revenue?.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Cast</h2>
            <div className="rounded-md border p-4">
              <div className="grid grid-cols-2 gap-4">
                {cast.map((person) => (
                  <div key={person.id} className="flex items-center gap-3">
                    <Image
                      src={
                        person.profile_path
                          ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                          : "https://via.placeholder.com/60x60"
                      }
                      alt={person.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/60x60";
                      }}
                    />
                    <div>
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {person.character}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Similar Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {similar.map((movie) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={movie.id}
                  className="group"
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[2/3]">
                        <Image
                          src={
                            movie.poster_path
                              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                              : "https://via.placeholder.com/500x750"
                          }
                          alt={movie.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://via.placeholder.com/500x750";
                          }}
                        />
                      </div>
                      <div className="p-2">
                        <p className="font-semibold line-clamp-1">
                          {movie.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {movie.release_date?.slice(0, 4)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
