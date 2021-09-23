import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import StarIcon from '@material-ui/icons/Star';
import FaceIcon from '@material-ui/icons/Face';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { FavoriteBorder } from '@material-ui/icons';
import { Favorite } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    overflow: 'scroll',
    backgroundColor: 'theme.palette.background.paper',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: '80vh',
    borderRadius: '4px',
    gridRowStart: '1',
    gridRowEnd: '3',
  },
  closeButton: {
    backgroundColor: '#212121',
    width: '100%',
    minHeight: '44px',
    color: '#ffffff',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  makeCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  watchButton: {
    border: '2px solid #212121',
    width: '100%',
    minHeight: '44px',
    color: '#212121',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

const MovieDetail = (props) => {
  const [ movieDetail, setMovieDetail ] = useState(null);
  const [ isFavorite, setFavorite ] = useState(false);
  const classes = useStyles();
  
  useEffect(() => {
    setMovieDetail(props.movieDetail);
  }, [props.movieDetail]);

  return (
    <Card className={ classes.root }>
      {movieDetail !== null &&
        <div className='detail-content-wrap'>
          <CardActionArea className='card-action-area'>
            <CardMedia
              className={ classes.media }
              image={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path }`}
              title={ movieDetail.title }
            />
            <CardContent className='card-content'>
              <div style={{ position: 'relative' }}>
                <h1>{ movieDetail.original_title } </h1>
                <span className='text-grey'>
                {
                  movieDetail.genres.map((genre, index) => {
                    return (
                      `${index ? ', ' : ''} ${genre.name}`
                    );
                  })
                }
                </span>
                { isFavorite ? <Favorite className='button-favorite' /> : <FavoriteBorder className='button-favorite' /> }
              </div>
              <div className='attribute-container'>
                <Chip 
                  icon={ <StarIcon style={{ color: 'orange' }}/> } 
                  label={ movieDetail.vote_average }
                  style={{ backgroundColor: '#212121', color: '#ffffff' }}
                />
                <Chip 
                  icon={ <FaceIcon style={{ color: '#ffffff' }}/> } 
                  label={ movieDetail.popularity }
                  style={{ backgroundColor: '#212121', color: '#ffffff' }}
                />
                <Chip 
                  icon={ <AccessTimeIcon style={{ color: '#ffffff' }}/> } 
                  label={ `${movieDetail.runtime} minute` }
                  style={{ backgroundColor: '#212121', color: '#ffffff' }}
                />
                <Chip 
                  icon={ <AttachMoneyIcon style={{ color: '#ffffff' }}/> } 
                  label={ `Budget: ${movieDetail.budget === 0 ? 'Not available' : movieDetail.budget.toLocaleString()}` }
                  style={{ backgroundColor: '#212121', color: '#ffffff' }}
                />
                <Chip 
                  label={ movieDetail.release_date } 
                  style={{ backgroundColor: '#212121', color: '#ffffff' }}
                />
              </div>
              <div className='overview-containter'>
                <h1 style={{ fontSize: '1.3em' }}>Overview:</h1>
                <p style={{ fontSize: '1.2em' }}>{ movieDetail.overview }</p>
              </div>
            </CardContent>
            <div className='card-actions'>
              <div
                className={ `${classes.watchButton} ${classes.makeCenter}` }
                onClick={ () => {
                  window.open(`${ movieDetail.homepage }`);
                }}
              >
                Watch
              </div>
              <div
                className={ `${classes.closeButton} ${classes.makeCenter}` }
                onClick={
                  () => {
                    props.handleClose();
                  }
                }>
                Close
              </div>
            </div>
          </CardActionArea>
        </div>
      }
    </Card>
  );
};

export default MovieDetail;
