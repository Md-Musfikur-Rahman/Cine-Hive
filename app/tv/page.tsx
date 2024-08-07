import TvShow from "@/components/movies/TvShow";

const TvShowsPage = () => {
  return (
    <div className="container">
      {/* Now Playing */}
      <TvShow listName="airing_today" />
      {/* Popular */}
      <TvShow listName="popular" />
      {/* Top Rated */}
      <TvShow listName="top_rated" />
      {/* Upcoming */}
      <TvShow listName="on_the_air" />
    </div>
  );
};
export default TvShowsPage;
