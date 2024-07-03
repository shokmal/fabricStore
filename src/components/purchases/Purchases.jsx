import { Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import "./Purchases.css";

export default function Purchases() {
  const purchase = [
    {
      name: "prime steam",
      price: 500,
    },
    {
      name: "skin",
      price: 100,
    },
  ];
  return (
    <box>
      <Container className="purchasse">
        <Typography variant="h5">Покупки</Typography>
        <TableContainer className="tablePurchasse" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Название товара</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">Дата</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchase.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    тест
                  </TableCell>
                  <TableCell align="right">тест</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </box>
  );
}
