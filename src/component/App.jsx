import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import Movies from '../models/Movies.js';
import Search from "./Search";
import TrendContainer from './TrendContainer';
import Footer from "./Footer";
import FabComponent from "./FabComponent";
import Supabase from '../models/SupabaseClient';
import Auth from './Auth';
import favoriteCount from "../utils/favoriteCount";

const App = () => {
  const [ session, setSession ] = useState(null);
  const [ movies, setMovies ] = useState(null);
  const [ movieGenres, setMovieGenres] = useState(null);
  const [ isSearch, setSearch ] = useState(false);
  const [ favoriteQuantity, setFavoriteQuantity ] = useState(0);

  const handleClickSearch = useCallback((text) => {
    if (text) {
      const getSearchMovie = async () => {
        const data = await Movies.getMovieSearch(text);
        setMovies(data);
      };
      getSearchMovie();
      setSearch(true);
    }
  }, []);

  const handleBack = (isAppear) => {
    const getDataMovies = async () => {
      const data = await Movies.getMovie();
      setMovies(data);
      setSearch(isAppear);
    };

    getDataMovies();
  }

  const handleCheckFavoriteQuantity = async () => {
    const quantity = await favoriteCount()
    setFavoriteQuantity(quantity);
  };

  useEffect(() => {
    setSession(Supabase.auth.session());
    Supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const getDataMovies = async () => {
      const data = await Movies.getMovie();
      setMovies(data);
    };

    const getMovieGenres = async () => {
      const data = await Movies.getGenres();
      setMovieGenres(data);
    };
    
    getDataMovies();
    getMovieGenres();
    handleCheckFavoriteQuantity();
  }, []);

  return(
    <div>
    { !session ? <Auth /> : 
      <div>
        <Header favoriteQuantity={ favoriteQuantity }/>
        <Search className='search-input' handleClick={ handleClickSearch }/>
        <TrendContainer 
          movies={ movies } 
          movieGenres={ movieGenres } 
          isSearch={ isSearch }
          checkFavoriteCount = { handleCheckFavoriteQuantity }
          closeHandleBack={ handleBack }  
        />
        { isSearch && <FabComponent handleBack={ handleBack }/>}
        <Footer />
      </div>
    }
    </div>
  );
};

export default App;
