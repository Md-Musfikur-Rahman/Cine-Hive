import Movies from "@/components/movies/Movies";
import { Button } from "@/components/ui";
import React from "react";

const Home = () => {
  return (
    <div className="container mt-4">
      Cine Hive
      <Button>Click me </Button>
      <Movies />
    </div>
  );
};

export default Home;
