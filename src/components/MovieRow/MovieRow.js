import React, { useEffect, useState } from 'react';
import './MovieRow.css';
import Movie from '../Movie/Movie';

const MovieRow = ({ title, movieUrl, inLargeRow}) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = `https://api.themoviedb.org/3/`;
  useEffect(() => {
    fetch(`${baseUrl}${movieUrl}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [baseUrl, movieUrl]);
//   console.log(movies)
  return (
    <div className="movieContainer">
      <h1>{title}</h1>
      <div className={ inLargeRow ? "movieRow-nowrap" : "movieRow"}>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} inLargeRow={inLargeRow}></Movie>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;