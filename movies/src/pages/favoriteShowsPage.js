import React, { useContext } from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { useQueries } from "react-query";
// import { getFavouriteShows } from "../api/movies-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavoritesTV";
import { TVShowsContext } from "../contexts/tvShowsContext";
import { getShow } from "../api/tmdb-api";

const FavoriteShowsPage = () => {
  // const context = useContext(TVShowsContext);
  // let  pageNum = context.page
  // // localStorage.clear()
  // localStorage.setItem("pageNum", pageNum);
  // const {  data, error, isLoading, isError }  = useQuery('favourites', getFavouriteShows)

  // if (isLoading) {
  //   return <Spinner />
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>
  // }
   
  // const shows = data;


  const {favorites: showIds } = useContext(TVShowsContext);
  const context = useContext(TVShowsContext);
  let  pageNum = context.page
  // localStorage.clear()
  localStorage.setItem("pageNum", pageNum);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favoriteShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  console.log(favoriteShowQueries)

  // const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromFavorites show={show} />
          </>
        );
      }}
    />
  );
};

export default FavoriteShowsPage;