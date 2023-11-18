import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMovieCredits } from "../../api/tmdb-api";
import { Link } from "react-router-dom";

export default function MovieCredits({ movie }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },  []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="cast table">
        <TableHead>
          <TableRow>
          <TableCell >Actors Name</TableCell>
            <TableCell align="center">Character Played</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits?.map(credit => (
            <TableRow key={credit.id}>
              <TableCell component="th" scope="row">
                {credit.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {credit.character}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              <Link
                  to={`/movies/actor/${credit.id}`}
                  state={{
                      movie: movie,
                  }}
                >
                  Movies Starred In
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}