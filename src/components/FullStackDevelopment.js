import CardData from "../data/Data.json";
import CardTemplate from "./CardTemplate";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MyAppBar from "./MyAppBar";

export default function FullStackDevelopment() {
  const fullStackCourses = CardData.filter(
    (item) => item.category === "FullStackDevelopment"
  );

  // Output the filtered courses
  console.log(fullStackCourses);

  return (
    <>
      <MyAppBar />
      <h1 style={{ textAlign: "center" }}>Full Stack Development</h1>;
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {fullStackCourses.map((itemData, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardTemplate itemData={itemData} key={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
