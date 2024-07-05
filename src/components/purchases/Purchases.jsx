import { Collapse, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
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
    <Container className="purchasse" sx={{ width: "40%" }}>
      <Typography
        variant="h1"
        color="#173653"
        fontWeight="500"
        fontSize="30px"
        lineHeight="23px"
        marginBottom="38px"
      >
        Покупки
      </Typography>
      <Box className="fdfd">
        <TableContainer className="tablePurchasse" component={Paper}>
          <Table className="tablePurchasse2" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell color="#173653">Название товара</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">Дата</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchase.map((row) => (
                <TableRow key={row.name} sx={{ "td, th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    тест
                  </TableCell>
                  <TableCell align="right">тест</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
