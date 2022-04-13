import React, { useEffect, useState } from 'react';
import './MovieRow.css';
import Movie from '../Movie/Movie';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const MovieRow = ({ title, movieUrl, inLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState()
  const baseUrl = `https://api.themoviedb.org/3/`;
  useEffect(() => {
    fetch(`${baseUrl}${movieUrl}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [baseUrl, movieUrl]);
  // console.log(movies)

  const opts ={
    height: "360px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    // console.log(movie)
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className={inLargeRow ? "movieContainerBig" : "movieContainer"}>
      <h1 className="main-title">{title}</h1>
      <div className={inLargeRow ? "movieRow-nowrap" : "movieRow"}>
        {movies.map((movie) => (
          <Movie
            handleClick={handleClick}
            movie={movie}
            key={movie.id}
            inLargeRow={inLargeRow}
          ></Movie>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default MovieRow;

