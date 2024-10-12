import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      {/* INFO: This shit down blow is will show on every page and it was showing on top of each page. */}
      {/* <div className="app"> */}
      {/*   <h1>Movie world</h1> */}
      {/*   <div className="search"> */}
      {/*     <input */}
      {/*       placeholder="search for movies" */}
      {/*       value={searchterm} */}
      {/*       onChange={(e) => setSearchTerm(e.target.value)} */}
      {/*     /> */}
      {/**/}
      {/*     <img */}
      {/*       src={SearchIcon} */}
      {/*       alt="search" */}
      {/*       onClick={() => { */}
      {/*         searchMovies(searchterm); */}
      {/*       }} */}
      {/*     /> */}
      {/*   </div> */}
      {/**/}
      {/*   {movies?.length > 0 ? ( */}
      {/*     <div className="container"> */}
      {/*       {movies.map((movies) => ( */}
      {/*         <Link to={`/movies/${movies.imdbID}`} key={movies.imdbID}> */}
      {/*           <MovieCard movie={movies} /> */}
      {/*         </Link> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   ) : ( */}
      {/*     <div className="empty"> */}
      {/*       <h2>SORRY THERE ARE NO RESULTS</h2> */}
      {/*     </div> */}
      {/*   )} */}
      {/* </div> */}
      {/* INFO: I put this outside the router and did not create a route because i want to show the navbar on every page. */}
      <Navbar />
      <Routes>
        {/* INFO: Putting this as a route makes it part of the routing system hence it behaves properly. `/` is the home route. */}
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
