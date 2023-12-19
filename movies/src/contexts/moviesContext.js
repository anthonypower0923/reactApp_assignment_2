import React, { useState } from "react";
import { addFavourite, removeFavourite } from "../api/movies-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [mustWatch, setMustWatch] = useState( [] )
  const [page, setPage] = React.useState(1);

  const addToFavorites = (movie) => {
    console.log(movie)
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
    addFavourite(movie)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    removeFavourite(movie)
    // setFavorites( favorites.filter(
    //   (mId) => mId !== movie.id
    // ) )
  };

  const addToWatchList = (movie) => {
    let playlist = [];
    playlist = [...mustWatch, movie.id];
    setMustWatch( playlist )
  };

  const changePage = (page) => {
  let pageNum = 1
  pageNum = page
  setPage(pageNum)
};


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
        changePage,
        page
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;