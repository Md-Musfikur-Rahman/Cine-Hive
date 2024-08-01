import axios from "axios";

export const getNowPlaying = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_Access_Token}`,
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data.results;
    // console.table(data);
    return data; // return the data so you can use it elsewhere
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error; // rethrow the error to handle it further up the chain
  }
};
