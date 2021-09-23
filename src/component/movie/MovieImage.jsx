import React from "react";
import { makeStyles } from "@material-ui/styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const useStyles = makeStyles(() => ({
  imgStyle: {
    borderRadius: '15px',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%',
  }
}));

const MovieImage = (props) => {
  const classes = useStyles();

  return(
    <LazyLoadImage
      alt={ props.name }
      effect="blur"
      src={ props.url } 
      className={ classes.imgStyle }
    />
  );
};

export default MovieImage;
