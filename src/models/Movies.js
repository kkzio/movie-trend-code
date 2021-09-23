import axios from 'axios';

const Movies = {
  async getMovie() {
    let movieData;
    try {
       movieData = await axios.get(`${process.env.REACT_APP_API_URL}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
    }
    catch(err) {
      console.log(err);
    }
    return movieData.data.results;
  },

  async getGenres() {
    let genresData;
    try {
      genresData = await axios.get(`${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
    } catch (err) {
      console.log(err);
    }
    return genresData.data.genres;
  },

  async getMovieSearch(query) {
    let movieData;
    try {
      movieData = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`);
    } catch (err) {
      console.log(err);
    }
    return movieData.data.results;
  },

  async getDetailMovie(id) {
    let movieData;
    try {
      movieData = await axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
    } catch (err) {
      console.log(err);
    }
    return movieData.data;
  },
}
export default Movies;
