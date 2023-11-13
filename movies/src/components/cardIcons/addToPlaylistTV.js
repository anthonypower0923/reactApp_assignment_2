import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { TVShowsContext } from "../../contexts/tvShowsContext";

const AddToPlaylistIconTV = ({ show }) => {
  const context = useContext(TVShowsContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToWatchList(show);
  };

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIconTV;