import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieProvider from "./MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
