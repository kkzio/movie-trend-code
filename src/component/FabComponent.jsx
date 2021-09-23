import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: '#212121',
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FabComponent = (props) => {
  const classes = useStyles();

  return(
    <Fab 
      variant="extended" 
      className={ classes.fab } 
      onClick={ () => {
        props.handleBack(false);
      }}>
      <ArrowBackIcon className={classes.extendedIcon} />
      Back
    </Fab>
  );
};

export default FabComponent;
