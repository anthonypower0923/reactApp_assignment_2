import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateShowPage";
import MovieReview from "../components/showReview";

const ShowReviewPage = (props) => {
  let location = useLocation();
  const {show, review} = location.state;
  
  return (
    <PageTemplate show={show}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default ShowReviewPage;