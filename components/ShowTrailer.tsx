"use client";

import { useState, useEffect } from "react";
import { CirclePlay } from "lucide-react";
import { Button, Dialog, DialogContent, DialogTrigger } from "./ui";
import { TrailerProps } from "@/lib/types";
import { getVedios } from "@/utils/api";

interface ShowTrailerProps {
  id: number;
}

const ShowTrailer: React.FC<ShowTrailerProps> = ({ id }) => {
  const [movieData, setMovieData] = useState<TrailerProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieVideos = async () => {
      try {
        const data = await getVedios("movie", id);
        setMovieData(data);
      } catch (error) {
        setError("Failed to fetch movie trailers.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieVideos();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <CirclePlay />
            <span className="ml-2 text-lg">Play</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-[600px] min-h-[400px] p-0">
          {movieData.length > 0 ? (
            <iframe
              id="ytplayer"
              className="w-[600px] h-[400px]"
              src={`https://www.youtube.com/embed/${movieData[0].key}`}
              allowFullScreen
            />
          ) : (
            <div>No trailer available.</div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowTrailer;
