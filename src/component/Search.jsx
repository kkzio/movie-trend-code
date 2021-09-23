import React, { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchForm: {
    margin: theme.spacing(1),
    '& input + fieldset': {
      borderColor: '#484848',
    },
    '& input:valid:focus + fieldset': {
      borderColor: '#212121',
    },
    width: '95%',
    backgroundColor: '#212121',
    borderRadius: '35px',
  },
  noBorder: {
    border: "none",
  },
  input: {
    color: "#ffffff",
    marginLeft: '3%',
  }
}));

const Search = (props) => {
  const [textInput, setTextInput ] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    const { value } = event.target;
    setTextInput(value);
  }

  return(
      <TextField
        className={ `${classes.searchForm} bottom-margin` }
        variant="outlined" 
        InputProps={{ 
          endAdornment: (
            <InputAdornment position="end">
                <SearchIcon onClick={ (event) => {
                    props.handleClick(textInput);
                    setTextInput('');
                }} 
                style={{ color: '#ffffff', cursor: 'pointer' }} 
                />
            </InputAdornment>
          ), 
          classes:{notchedOutline: classes.noBorder}, 
          className: classes.input,
        }}
        placeholder='Search...'
        value={ textInput }
        onChange={ handleChange }
      />
  );
};

export default Search;
