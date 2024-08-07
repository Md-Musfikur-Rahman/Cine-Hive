import NowPlaying from "@/components/movies/NowPlaying";

const MoviesPage = () => {
  return (
    <div className="container">
      {/* Now Playing */}
      <NowPlaying listName="now_playing" />
      {/* Popular */}
      <NowPlaying listName="popular" />
      {/* Top Rated */}
      <NowPlaying listName="top_rated" />
      {/* Upcoming */}
      <NowPlaying listName="upcoming" />
    </div>
  );
};

export default MoviesPage;
