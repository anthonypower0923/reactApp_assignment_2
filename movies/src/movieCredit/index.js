import React from "react";
import Typography from "@mui/material/Typography";

const Credit =  ({ cast }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Actor: {cast.name}
      </Typography>

      <Typography variant="h5" component="h3">
        Gender: {cast.gender}
      </Typography>

      <Typography variant="h5" component="h3">
        Character: {cast.character}
      </Typography>
    </>
  );
};
export default Credit