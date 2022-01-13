import React, { useEffect, useState } from 'react';
import { request } from '../request';
import './Banner.css'

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
    console.log(image + movie?.backdrop_path);
    return (
      <header className="banner_background" style={background_img}>
        <div className="banner-contain"></div>
      </header>
    );
};

export default Banner;