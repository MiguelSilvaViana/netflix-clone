import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovies } from '../../api';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

import './Row.css';

const imageHost = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, path, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data.results);
    } catch (error) {
      console.log('error row.jsx ', error);
    }
  };

  const handleOnclick = (movie) => {
    // get url trailer
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      // the movie trailer return url
      // react player run the url
      movieTrailer(movie.title || movie.name || movie.original_name || '')
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((e) => {
          console.log('Error fetching movie trailer: ', e);
        });
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <img
              className={`movie-card ${isLarge && 'movie-card-large'}`}
              onClick={() => handleOnclick(movie)}
              key={movie.id}
              src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
    </div>
  );
};

export default Row;
