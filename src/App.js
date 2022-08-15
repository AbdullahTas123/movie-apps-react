import React, { useState, useEffect } from "react";
//import { nanoid } from "nanoid";
import { Movie } from "./components/Movie";

const api_key = "aef71e4d18584f472147bed4873953bf";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + api_key + "&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });

  }, []);

  return (
    <div>
      {movies.length > 0 && movies.map(movie => 
        <Movie key={movie.id} movie={movie} api_key={api_key} />
      )}

    </div>
  );
}

export default App;
