import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >=6) {
    return "orange";
  } else {
    return "red";
  }
}

export const Movie = ({movie, api_key}) => {
  return (
    <div className='movie'>
      <div className="movie-header">
        <img src={IMG_API + movie.poster_path} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className={"vote " + setVoteClass(movie.vote_average)}>{movie.vote_average}</span>
        </div>
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
