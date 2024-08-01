import Movies from "@/components/movies/Movies";
import React from "react";

const Home = () => {
  return (
    <div className="container mt-4">
      <div>Hero Section</div>
      <Movies />
      <div>TV Shows</div>
    </div>
  );
};

export default Home;
