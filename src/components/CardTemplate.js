import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardTemplate({ itemData, index }) {
  // Function to handle click event
  const handleCardClick = () => {
    window.location.href = itemData.url;
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={handleCardClick}>
      <CardMedia
        sx={{ height: 140 }}
        image={itemData.imageUrl}
        title={itemData.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemData.title}
        </Typography>
        <small>{itemData.author}</small>
        <div className="cardFlex">
          <small>{itemData.timeStamp}</small>
          <small>{itemData.timeToRead}</small>
        </div>
      </CardContent>
    </Card>
  );
}
