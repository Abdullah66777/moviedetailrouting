import React, { useEffect, createContext, useState } from "react";
//aad07d1c99caf608672e75fc3e221a0d
//http://www.omdbapi.com?apikey=14546103
const MovieContext = createContext();
const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=aad07d1c99caf608672e75fc3e221a0d";
const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const moviedetails = async (title) => {
    const response = await fetch(
      `${API_URL}&query=${encodeURIComponent(title)}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    moviedetails("batman");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MovieContext.Provider
      value={{ searchterm, setSearchTerm, movies, moviedetails }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return React.useContext(MovieContext);
};

export default MovieProvider;
