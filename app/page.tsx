import {
  TrendingAll,
  TrendingMovies,
  TrendingTvShows,
} from "@/components/trending";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      {/* Trending ALL */}
      <TrendingAll />
      {/* Trending Movies */}
      <TrendingMovies />
      {/* Trending TV Shows */}
      <TrendingTvShows />
    </div>
  );
};

export default Home;
