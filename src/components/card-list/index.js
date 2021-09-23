import { Grid, Container } from "@material-ui/core";
import React from "react";
import { Card } from "../card";
import "./card-list.css";

export const CardList = (props) => {
  return (
    <Container className="monsters-list">
      <Grid container md={12} xl={12} spacing={2} direction="row">
        {props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </Grid>
    </Container>
  );
};
