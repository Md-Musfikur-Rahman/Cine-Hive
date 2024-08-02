import {
  TrendingAll,
  TrendingMovies,
  TrendingTvShows,
} from "@/components/trending";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div>Hero Section</div>
      {/* Trending ALL */}
      <TrendingAll />
      {/* Trending Movies */}
      <TrendingMovies />
      {/* Trending TV Shows */}
      <TrendingTvShows />
      <div>TV Shows</div>
    </div>
  );
};

export default Home;
