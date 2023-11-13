import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIconTV = ({ show }) => {
  const context = useContext(TVShowsContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(show);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIconTV;