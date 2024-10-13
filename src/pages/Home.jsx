import { useEffect, useState } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";
import { useMovieContext } from "../MovieContext";
import  {useMovieContext}  from "../MovieContext";


const Home = () => {
  const { movies, moviedetails } = useMovieContext();
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    moviedetails("batman");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            moviedetails(searchterm);
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
