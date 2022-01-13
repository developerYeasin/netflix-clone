import React from 'react';
import Banner from '../Banner/Banner';
import MovieRow from '../MovieRow/MovieRow';
import { request } from '../request';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <MovieRow title="Netflix Original" movieUrl={request.fetchNetflixOriginals} inLargeRow></MovieRow>
             <MovieRow title="Trending" movieUrl={request.fetchTrending}></MovieRow>
             <MovieRow title="Top Rated" movieUrl={request.fetchTopRated}></MovieRow>
             <MovieRow title="Action Movie" movieUrl={request.fetchActionMovie}></MovieRow>
             <MovieRow title="Comedy Movie" movieUrl={request.fetchComedyMovie}></MovieRow>
             <MovieRow title="Horror Movie" movieUrl={request.fetchHorrorMovie}></MovieRow>
             <MovieRow title="Romance Movie" movieUrl={request.fetchRomanceMovie}></MovieRow>
             <MovieRow title="Documentaries" movieUrl={request.fetchDocumentaries}></MovieRow>
        </div>
    );
};

export default Home;