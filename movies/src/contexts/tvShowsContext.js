import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [mustWatch, setMustWatch] = useState( [] )
  const [page, setPage] = React.useState(1);

  const addToFavorites = (show) => {
    let newFavorites = [];
    if (!favorites.includes(show.id)){
      newFavorites = [...favorites, show.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };
  
  // We will use this function in a later section
  const removeFromFavorites = (show) => {
    setFavorites( favorites.filter(
      (mId) => mId !== show.id
    ) )
  };

  const addToWatchList = (show) => {
    let playlist = [];
    playlist = [...mustWatch, show.id];
    setMustWatch( playlist )
  };

  const changePage = (page) => {
    let pageNum = 1
    pageNum = page
    setPage(pageNum)
  };

  return (
    <TVShowsContext.Provider
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
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;