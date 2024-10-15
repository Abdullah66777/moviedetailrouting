import React from "react";
import SearchIcon from "../search.svg";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";
import { useMovieContext } from "../MovieContext";

const Home = () => {
  const { setSearchTerm, searchterm, movies, moviedetails } = useMovieContext();
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
          className="search-icon"
          src={SearchIcon}
          alt="search"
          onClick={() => {
            moviedetails(searchterm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <Link to={`/movies/${movies.id}`} key={movies.id}>
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
