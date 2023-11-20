import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";

const HomePage = (props) => {
  const context = useContext(MoviesContext);
  let  pageNum = context.page
  localStorage.clear()
  localStorage.setItem("pageNum", pageNum);
  const {  data , error, isLoading, isError }  = useQuery(['discover', {pageNum: pageNum}]
  ,getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />

);
};
export default HomePage;