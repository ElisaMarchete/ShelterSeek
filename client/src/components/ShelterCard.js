import { React } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Donation from "./Donation";
import { DogIcon, CatIcon, RabbitIcon } from "./Icons";

function ShelterCard({ shelter }) {
  return (
    <Card
      sx={{ width: 350 }}
      className="shelter-card"
      key={shelter._id}
      to={{
        pathname: `/shelters/${shelter._id}`,
        state: { shelter }, // Pass shelter as state
      }}
      style={{
        boxShadow: "0px 0px 3px 0px",
        margin: "10px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        to={{
          pathname: `/shelters/${shelter._id}`,
          state: { shelter }, // Pass shelter as state
        }}
        style={{
          textDecoration: "initial",
          color: "initial",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <CardActionArea
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={shelter.image}
            alt={shelter.name}
            style={{ borderRadius: "5px" }}
          />
          <CardContent
            className="shelter-info"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexGrow: 1,
              width: "90%",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                verticalAlign: "center",
                marginBottom: "30px",
              }}
            >
              {shelter.name}
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontSize: "0.9rem",
                marginTop: "5px",
                marginBottom: "20px",
                flexGrow: 1,
              }}
            >
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
            <div className="animals-kept">
              {shelter.dog ? <DogIcon /> : null}
              {shelter.cat ? <CatIcon /> : null}
              {shelter.rabbit ? <RabbitIcon /> : null}
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
      <Divider />
      <Donation shelterId={shelter._id} />
    </Card>
  );
}

export default ShelterCard;
