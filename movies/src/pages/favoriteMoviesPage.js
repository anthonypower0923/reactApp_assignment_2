import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { getFavourites } from "../api/movies-api";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  let  pageNum = context.page
  // localStorage.clear()
  localStorage.setItem("pageNum", pageNum);
  const {  data, error, isLoading, isError }  = useQuery('favourites', getFavourites)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
   
  const movies = data;

  // Redundant, but necessary to avoid app crashing.
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (movieId) => true


  // const {favorites: movieIds } = useContext(MoviesContext);
  // const context = useContext(MoviesContext);
  // let  pageNum = context.page
  // localStorage.clear()
  // localStorage.setItem("pageNum", pageNum);

  // // Create an array of queries and run in parallel.
  // const favoriteMovieQueries = useQueries(
  //   movieIds.map((movieId) => {
  //     return {
  //       queryKey: ["movie", { id: movieId }],
  //       queryFn: getMovie,
  //     };
  //   })
  // );
  // // Check if any of the parallel queries is still loading.
  // const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // const movies = favoriteMovieQueries.map((q) => {
  //   q.data.genre_ids = q.data.genres.map(g => g.id)
  //   return q.data
  // });

  // const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;