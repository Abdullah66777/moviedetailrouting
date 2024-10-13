import React, { createContext, useState } from 'react';

const MovieContext = createContext();
const API_URL = "http://www.omdbapi.com?apikey=14546103";
const MovieProvider=({children})=>{
    const [movies, setMovies] = useState([]);
        const moviedetails = async (title) => {
            
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
            console.log(data.Search);
}
return(
<MovieContext.Provider value={{movies,moviedetails}}>
    {children}
</MovieContext.Provider>
);


};

export const useMovieContext =()=>{
    return React.useContext(MovieContext);
};

export default MovieProvider;