import React from "react";
import Chip from '@material-ui/core/Chip';
import StarIcon from '@material-ui/icons/Star';
import FaceIcon from '@material-ui/icons/Face';

const MovieTextContainer = (props) => {
  const genreArray = props.genres;
  let genres;

  if(genreArray !== null) {
    genres = genreArray.filter((res) => {
      return props.idGenre.includes(res.id);
    });
  }

  return(
    <div className='movie-text-container'>
      <h1 className='heading1 one-line'>{props.title}</h1>
      <span className='one-line text-grey'>
      {
        genres === undefined 
        ? ''
        : genres.map((genre, index) => {
            return (
              `${index ? ', ' : ''} ${genre.name}`
            );
          })
      }
      </span>
      <span className='movie-attribute'>
        <Chip 
          icon={ <StarIcon style={{ color: 'orange' }}/> } 
          label={ props.rating }
          style={{ backgroundColor: '#212121', color: '#ffffff' }}
        />
        <Chip 
          icon={ <FaceIcon style={{ color: '#ffffff' }}/> } 
          label={ props.popularity }
          style={{ backgroundColor: '#212121', color: '#ffffff' }}
        />
        <Chip 
          label={ props.release } 
          style={{ backgroundColor: '#212121', color: '#ffffff' }}
        />
        <p className='two-line'>{props.overview}</p>
      </span>
    </div>
  );
};

export default MovieTextContainer;
