import React, { useState } from "react";
import MovieImage from "./movie/MovieImage";
import MovieTextContainer from "./movie/MovieTextContainer";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Movies from "../models/Movies";
import MovieDetail from "./movie/MovieDetail";

const WaitForMovie = withStyles(() => ({
  root: {
    color: '#212121',
    width: '64px !important',
    height: '64px !important',
  },
}))(CircularProgress);

const TrendContainer = (props) => {
  const [ movieDetailData, setMovieDetailData ] = useState(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const movieTrends = props.movies;
  const genres = props.movieGenres;

  const handleClick = (id) => {
    const getMovieDetail = async () => {
      const data = await Movies.getDetailMovie(id);
      setMovieDetailData(data);
    }

    getMovieDetail();
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
    setMovieDetailData(null);
  }

  return(
    <div>
      <h1 className='heading1 bottom-margin'>
        { props.isSearch ? 'Search result' : 'Movie Trending'}
      </h1>
      {movieTrends !== null && movieTrends.length < 1 && <h1 className='not-found'>Not Found </h1> }
      <div className='container-movie'>
      { 
        movieTrends === null
        ? <WaitForMovie />
        : movieTrends.map((movie) => {
          return(
            <div 
              className='wrap-card-movie bottom-margin' 
              key={ movie.id } 
              onClick={ () => {
                handleClick(movie.id);
                props.closeHandleBack(false);
              }}>
              <MovieImage 
                url={ `https://image.tmdb.org/t/p/original/${movie.poster_path}` }
                name={ movie.title }
              />
              <MovieTextContainer 
                title={ movie.original_title }
                idGenre={ movie.genre_ids }
                release={ movie.release_date }
                rating={ movie.vote_average }
                popularity={ movie.popularity }
                overview={ movie.overview }
                genres= { genres }
              />
            </div>
          );
        })
      }
      </div>
      { isModalOpen && 
        <MovieDetail 
          handleClose={ handleClose } 
          movieDetail={ movieDetailData } 
          checkFavoriteCount={ props.checkFavoriteCount }/>
      }
    </div>
  );
};

export default TrendContainer;
