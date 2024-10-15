import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="year">
        <p>Release date:{movie.release_date}</p>
      </div>
      <div className="overview">
        <p>Plot: {movie.overview}</p>
        <h3>click to see more details</h3>
      </div>
      <div className=".movie-poster">
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : `https://via.placeholder.com/300`
          }
          alt={movie.original_title}
        />
      </div>
      <div>
        <h3>{movie.original_title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
