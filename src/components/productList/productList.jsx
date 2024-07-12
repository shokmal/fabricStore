import * as React from "react";
import { useState } from "react";
import "./ProductList.css";
import { CardContent, CardMedia, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCards/ProductCard";
import { Data } from "../Data";

export default function ProductList() {
  const [item, setItems] = useState(Data);
  return (
    <Container className="productList">
      <Grid container spacing={5}>
        {item.map((item) => (
          <Grid item key={item} xs={12} sm={6} md={3}>
            <ProductCard
              image={item.image}
              tytle={item.tytle}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
