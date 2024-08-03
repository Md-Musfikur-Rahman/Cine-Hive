import axios from "axios";
type SectionType = "all" | "movie" | "tv" | "person";
type TimeType = "day" | "week";
type MediaType = "movie" | "tv";

const Header = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_Access_Token}`,
};

export const getMovieLists = async (section: MediaType, listName: TimeType) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${section}/${listName}`,
    params: { language: "en-US", page: "1" },
    headers: Header,
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

export const getTrending = async (section: SectionType, time: TimeType) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/${section}/${time}`,
    params: { language: "en-US" },
    headers: Header,
  };

  try {
    const response = await axios.request(options);
    const data = response.data.results;
    // console.table(data);
    return data; // return the data so you can use it elsewhere
  } catch (error) {
    console.log("API Token:", process.env.NEXT_PUBLIC_API_Access_Token);
    console.error("Error fetching now playing movies:", error);
    throw error; // rethrow the error to handle it further up the chain
  }
};

export const getDetails = async (media_type: string, id: number) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${media_type}/${id}`,
    params: { language: "en-US" },
    headers: Header,
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    // console.table(data);
    return data; // return the data so you can use it elsewhere
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error; // rethrow the error to handle it further up the chain
  }
};
