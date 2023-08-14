import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Donation from "./Donation";

function ShelterList({ shelters }) {
  return (
    <div className="ShelterList">
      <h2>List of Shelters</h2>
      <div className="shelters-section">
        {shelters.map((shelter) => {
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

            // <div className="shelter-card" key={shelter._id}>
            //   <img src={shelter.image} alt={`${shelter.name}`}></img>

            //   <div className="shelter-info">
            //     <h1>{shelter.name}</h1>
            //     <h2>{shelter.description}</h2>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShelterList;
