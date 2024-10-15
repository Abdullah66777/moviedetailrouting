import React from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "./MovieContext";

const MovieDetail = () => {
  const { id } = useParams();
  const { movies } = useMovieContext();
  const moviedata = movies.find((movie) => (movie.id = id));

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
            <h3>RELEASE DATE:{moviedata.release_date}</h3>
            <h3>TITLE:{moviedata.original_title}</h3>
            <p>IMDB ID:{moviedata.id}</p>
            <img
              src={
                moviedata.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${moviedata.poster_path}`
                  : "https://via.placeholder.com/300"
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
