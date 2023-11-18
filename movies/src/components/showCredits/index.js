import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getShowCredits } from "../../api/tmdb-api";

export default function ShowCredits({ show }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getShowCredits(show.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },  []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="show cast table">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}