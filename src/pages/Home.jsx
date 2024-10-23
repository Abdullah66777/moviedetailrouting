import React from "react";
import SearchIcon from "../search.svg";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";
import { useMovieContext } from "../MovieContext";

const Home = () => {
  const { setSearchTerm, searchterm, movies, moviedetails } = useMovieContext();
  return (
    <div className="app">
      <h1>Welcome to cinematic</h1>
      <h2>A free platform to watch any movie and tvshow</h2>
      <h2>Lights, camera, action! Discover, watch,</h2>
      <h2>and celebrate the art of storytelling</h2>
      <div
        style={{
          marginTop: "10rem",
          position: "relative", // String value for relative positioning
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Correct string format
          display: "flex", // Use flexbox if you want to center content inside
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Search for your favourite movies and tv shows</h2>
      </div>
      <div className="search">
        <input
          placeholder="Search for movies, tvshows"
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
      <h2
        style={{
          marginBottom: "10px",
          position: "relative", // String value for relative positioning
        }}
      >
        Movies:
      </h2>
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
