import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [mustWatch, setMustWatch] = useState( [] )

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
  console.log(myReviews);
  
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
  console.log(mustWatch);

  return (
    <TVShowsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;