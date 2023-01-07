import React from 'react';
import { useState, useEffect } from 'react';
import fetchCategories, { getMovies } from '../../api';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginals = fetchCategories.find(
        (category) => category.name === 'netflixOriginals',
      );
      const data = await getMovies(netflixOriginals.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log('fetch random movie ', error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  }

  const image = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  return (
    <header
      className="banner-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // roundPosition: "center-center",,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button-container">
          <button className="banner-button">Watch</button>
          <button className="banner-button">My Favorites</button>
        </div>
        <div className="banner-description">
          <h2>{truncate(movie?.overview, 150)}</h2>
        </div>
      </div>
    </header>
  );
};

export default Banner;
