import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Donation from "./Donation";

function ShelterCard({ shelter }) {
  return (
    <Card
      sx={{ maxWidth: 400 }}
      className="shelter-card"
      key={shelter._id}
      to={`/shelters/${shelter._id}`}
    >
      <Link
        to={{
          pathname: `/shelters/${shelter._id}`,
          state: { shelter }, // Pass shelter as state
        }}
        style={{ textDecoration: "initial", color: "initial" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={shelter.image}
            alt={shelter.name}
          />
          <CardContent className="shelter-info">
            <Typography gutterBottom variant="h5" component="div">
              {shelter.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {shelter.description}
            </Typography>
            <Rating
              className="shelter-rating"
              name="simple-controlled"
              value={shelter.rating}
              readOnly
              style={{ color: "black" }}
              size="small"
            />
          </CardContent>
        </CardActionArea>
      </Link>
      <Donation shelterId={shelter._id} />
    </Card>
  );
}

export default ShelterCard;
