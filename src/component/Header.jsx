import React from "react";
import Badge from '@material-ui/core/Badge';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  anchorTopRight: {
    transform: 'translate(50%, -90%)',
    backgroundColor: '#000000',
    color: '#ffffff',
    zIndex: '0',
  },
  favoritLink: {
    color: '#000000',
    minWidth: '44px',
    minHeight: '44px',
    cursor: 'pointer',
  }
}));

const Header = () => {
  const classes = useStyles();
  
  return(
    <header>
      <h1 className='header bottom-margin'>Movie Trend</h1>
      <div className={ classes.favoritLink }>
        <Badge 
          badgeContent={0} 
          classes={{ badge: classes.anchorTopRight }} 
          showZero={ true }>
            Favorite
        </Badge>
      </div>
    </header>
  );
};

export default Header;
