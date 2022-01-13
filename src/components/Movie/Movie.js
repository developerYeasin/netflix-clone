import React from 'react';
import './Movie.css';

const Movie = ({movie, inLargeRow}) => {
    // const image = `https://image.tmbd.org/t/p/original`;
    const image = `https://image.tmdb.org/t/p/original`;
    // console.log(movie);
    return (
      <div className="movie">
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