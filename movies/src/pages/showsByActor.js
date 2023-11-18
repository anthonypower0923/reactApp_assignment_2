import React from "react";
import { useParams } from 'react-router-dom';
import {getShowsByActor} from "../api/tmdb-api";
import PageTemplate from '../components/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIconTV from '../components/cardIcons/addToFavoritesTV'

const ShowsByActorPage = (props) => {
    const {id} = useParams();
    const { data, error, isLoading, isError } = useQuery(
      ["showsByActor", { id: id }],
      getShowsByActor
    );

    // console.log(GetMoviesByActor(id))
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const shows = data.cast;
  
    // Redundant, but necessary to avoid app crashing.
    const favorites = shows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const addToFavorites = (showId) => true 
  
    return (
            <PageTemplate
            title="Actors Shows"
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
  export default ShowsByActorPage;