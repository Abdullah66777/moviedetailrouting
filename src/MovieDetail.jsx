import React from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "./MovieContext";

const MovieDetail = () => {
  const { id } = useParams();
  const { movies } = useMovieContext();
  const moviedata = movies.find((movie) => movie.imdbID === id);

  // const [moviedata, setMovieData] = useState(null);

  // useEffect(() => {
  //   const moviedetails = async () => {
  //     const response = await fetch(`${API_URL}&i=${id}`);
  //     const data = await response.json();
  //     setMovieData(data);
  //     console.log(data);
  //   };
  //   moviedetails();
  // }, [id]);
  return (
    <div className="app">
      <h1>Movie Details</h1>
      <div>
        {moviedata ? (
          <div className="moviedetails">
            <h3>YEAR:{moviedata.Year}</h3>
            <h3>TITLE:{moviedata.Title}</h3>
            <h3>TYPE:{moviedata.Type} </h3>
            <p>IMDB ID:{moviedata.imdbID}</p>
            <img
              src={
                moviedata.Poster !== "N/A"
                  ? moviedata.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={moviedata.Title}
            />
          </div>
        ) : (
          <h1>no movie data found</h1>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
