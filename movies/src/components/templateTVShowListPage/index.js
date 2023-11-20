import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import TVShowList from "../tvShowList";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { TVShowsContext } from "../../contexts/tvShowsContext";
import { useContext } from "react";

function TVShowListPageTemplate({ shows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [page, setPage] = React.useState(1);
  const context = useContext(TVShowsContext);

  let displayedShows = shows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  const handlePageChange = (event, value) => {
    context.changePage(value)
    setPage(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handlePageChange} />
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TVShowList action={action} shows={displayedShows}></TVShowList>
      </Grid>
    </Grid>
  );
}
export default TVShowListPageTemplate;