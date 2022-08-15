import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";


export const Movie = ({movie, api_key}) => {

  return (
    <div className='movie'>
      <div className="movie-header">
        <img src={IMG_API + movie.poster_path} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span>{movie.vote_average}</span>
        </div>
      </div>
      
    </div>
  )
}
