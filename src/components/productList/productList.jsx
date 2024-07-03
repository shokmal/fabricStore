import * as React from "react";
import "./ProductList.css";
import { CardContent, CardMedia, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCards/ProductCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ProductList() {
  return (
    <Box>
      <Container className="productList">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <ProductCard
                image={"https://source.unsplash.com/random"}
                tytle={"название продукта"}
                price={"100 ₽"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
