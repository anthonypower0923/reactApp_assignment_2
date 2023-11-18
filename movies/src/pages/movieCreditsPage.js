import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieCredits from "../components/movieCredits";

const MovieCreditsPage = (props) => {
  let location = useLocation();
  const {movie, credit} = location.state;
  
  return (
    <PageTemplate movie={movie}>
      <MovieCredits credit={credit} />
    </PageTemplate>
  );
};

export default MovieCreditsPage;