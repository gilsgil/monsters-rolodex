import React from "react";
import "./card.css";
import { Grid } from "@material-ui/core";

export const Card = (props) => {
  return (
    <Grid item lg={4} md={6} sm={6} xs={12} id="card">
      <img src={`https://robohash.org/${props.monster.id}`} alt="monster" />
      <h1>{props.monster.name}</h1>
      <h2>{props.monster.email}</h2>
    </Grid>
  );
};
