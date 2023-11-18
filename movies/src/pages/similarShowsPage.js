import React from "react";
import { useParams } from 'react-router-dom';
import {getSimilarShows} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIconTV from '../components/cardIcons/addToFavoritesTV'

const SimilarShowsPage = (props) => {
  const {id} = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["similarShows", { id: id }],
    getSimilarShows
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (showId) => true 

  return (
          <PageTemplate
          title="Similar Shows"
          shows={shows}
          action={(show) => {
            return (
              <>
                <AddToFavoritesIconTV show={show} />
              </>
            ); 
          }}
        />
);
};
export default SimilarShowsPage;