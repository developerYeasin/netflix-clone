import React from 'react';
import './Movie.css';

const Movie = ({movie, inLargeRow, handleClick}) => {
  // const image = `https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg`;
  const image = `https://image.tmdb.org/t/p/original`;
  // console.log(movie);
  return (
    <div className="movie" onClick={() => handleClick(movie)}>
      {inLargeRow ? (
        <img
          className="MoviePoster"
          src={image + movie.poster_path}
          alt={movie.name}
        />
      ) : (
        <img
          className="MoviePoster"
          src={image + movie.backdrop_path}
          alt={movie.name}
        />
      )}
    </div>
  );
};

export default Movie;