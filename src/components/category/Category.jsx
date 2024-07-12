import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCards/ProductCard";
import Box from "@mui/material/Box";
import CategoryButton from "../Button/CategoryButton";
import { Data } from "../Data";
import "./Category.css";

export default function Category() {
  const [item, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <Container className="productList">
      <Typography
        variant="h1"
        color="#173653"
        fontWeight="500"
        fontSize="30px"
        lineHeight="23px"
        marginBottom="38px"
      >
        Игры
      </Typography>
      <Box className={"CategoryButton"}>
        <CategoryButton
          menuItems={menuItems}
          fileterItems={filterItems}
          setItems={setItems}
        />
      </Box>
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
