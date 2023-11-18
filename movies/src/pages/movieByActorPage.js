import React from "react";
import { useParams } from 'react-router-dom';
import {GetMoviesByActor} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const MovieByActorPage = (props) => {
    const {id} = useParams();
    const { data, error, isLoading, isError } = useQuery(
      ["movieByActor", { id: id }],
      GetMoviesByActor
    );

    // console.log(GetMoviesByActor(id))
  
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
            title="Actors Movies"
            movies={movies}
            action={(movie) => {
              return (
                <>
                  <AddToFavoritesIcon movie={movie} />
                </>
              ); 
            }}
          />
  );
  };
  export default MovieByActorPage;