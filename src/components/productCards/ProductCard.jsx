import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import MainButton from "../Button/MainButton";
import "./Card.css";

export default function ProductCard({ image, tytle, price }) {
  return (
    <Box>
      <Link style={{ textDecoration: "none" }}>
        <Card className="productCard">
          <CardMedia
            className="productCardMedia"
            component="img"
            height="250"
            image={image}
          />
          <CardContent className="productCardContent">
            <Typography>{tytle}</Typography>
            <Typography variant="h5">{price}</Typography>
          </CardContent>
          <CardActions>
            <MainButton tytle={"Купить"} />
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
}
