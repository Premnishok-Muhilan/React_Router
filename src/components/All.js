import * as React from "react";
import { NavLink } from "react-router-dom";

import CardData from "../data/Data.json";
import CardTemplate from "./CardTemplate";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MyAppBar from "./MyAppBar";

export default function All() {
  return (
    <>
      <MyAppBar />
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {CardData.map((itemData, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardTemplate itemData={itemData} key={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
