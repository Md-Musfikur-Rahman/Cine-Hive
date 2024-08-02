import axios from "axios";
type SectionType = "all" | "movie" | "tv" | "person";
type TimeType = "day" | "week";
type MediaType = "movie" | "tv";

const Header = {
  accept: "application/json",
  Authorization: process.env.API_Access_Token,
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
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTFhODk3NmNiMzYwMDNmMzBhN2ZlYjkwMjNkODM0NiIsIm5iZiI6MTcyMjE4NTAxNy44Nzk3MjgsInN1YiI6IjY0ZTQzODVmNTI1OGFlMDBlYWEyMDUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWgqIhCN9257HAzA6eaTtoT3KYyaLa0OQC1rxmHN6BU",
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

export const getDetails = async (media_type: string, id: number) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${media_type}/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTFhODk3NmNiMzYwMDNmMzBhN2ZlYjkwMjNkODM0NiIsIm5iZiI6MTcyMjU5MTIxOS40MzcyNzcsInN1YiI6IjY0ZTQzODVmNTI1OGFlMDBlYWEyMDUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hco9BI3_H6eRbtx0QVs1LockNvGXZyYhL3lluuZ-PeY",
    },
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
