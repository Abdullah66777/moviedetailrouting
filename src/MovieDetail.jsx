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
    <div>
      {moviedata ? (
        <div style={{ color: "white" }}>
          <p>{moviedata.Year}</p>
          <p>{moviedata.Title}</p>
          <p>{moviedata.Type}</p>
          <p>{moviedata.imdbID}</p>
          <p>{moviedata.Plot}</p>
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
  );
};

export default MovieDetail;
