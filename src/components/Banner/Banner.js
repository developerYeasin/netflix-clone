import React, { useEffect, useState } from 'react';
import { request } from '../request';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState({})
    const image = `https://image.tmdb.org/t/p/original`;
    const baseUrl = `https://api.themoviedb.org/3/`;


    
    useEffect(() => {
      fetch(baseUrl + request.fetchNetflixOriginals)
        .then((res) => res.json())
        .then((data) => setMovie(data.results[Math.floor(Math.random() * data.results.length -1)]));
    }, [baseUrl]);

    const background_img = {
      backgroundImage: `url(${image}${movie?.backdrop_path})`,
    };
    // console.log(movie);
    return (
      <header className="banner_background" style={background_img}>
        <div className="banner-contain">
          <h2 className="banner-title">{movie?.name}</h2>
          <div className="banner-btn">
            <a href="#" className="btn">
              Play
            </a>
            <a href="#" className="btn">
              My List
            </a>
          </div>
          <p className="banner-disc">{movie?.overview}</p>
        </div>
      </header>
    );
};

export default Banner;