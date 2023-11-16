import React from "react";
import {getTrendingShows} from "../api/tmdb-api";
import PageTemplate from '../components/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIconTV from '../components/cardIcons/addToFavoritesTV'

const TrendingShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('trendingShows', getTrendingShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;
//   console.log(shows)

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (showId) => true 

  return (
    <PageTemplate
      title="Trending Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavoritesIconTV show={show} />
      }}
    />
);
};
export default TrendingShowsPage;