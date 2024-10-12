import { useEffect, useState } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  const API_URL = "http://www.omdbapi.com?apikey=14546103";
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>Movie world</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchterm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchterm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <Link to={`/movies/${movies.imdbID}`} key={movies.imdbID}>
              <MovieCard movie={movies} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>SORRY THERE ARE NO RESULTS</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
