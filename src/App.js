import React, { useState, useEffect } from "react";
//import { nanoid } from "nanoid";
import { Movie } from "./components/Movie";

const api_key = "aef71e4d18584f472147bed4873953bf";
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + api_key + "&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API+searchTerm);
      setSearchTerm("");
    }
  }

  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <a className="home" onClick={() => getMovies(FEATURED_API)}>Home</a>
        <form onSubmit={handleOnSubmit}>
          <input 
            type="search" 
            className="search" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleOnChange} 
            
            />
        </form>
      </header>
      
      <div className="movie-container" >
        {movies.length > 0 && movies.map(movie => 
          <Movie key={movie.id} movie={movie} api_key={api_key} />
        )}
      </div>
    </>
  );
}

export default App;
