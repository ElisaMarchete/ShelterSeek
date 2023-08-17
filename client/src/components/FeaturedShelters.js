import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useQuery } from "@apollo/client";
import { GET_SHELTERS } from "../utils/queries";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function ShelterCarousel() {
  const { data } = useQuery(GET_SHELTERS, {
    variables: {
      sort: { field: "rating", direction: "DESC" },
    },
  });

  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    if (data) {
      setShelters(data.shelters);
    }
  }, [data]);

  console.log(shelters);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "40px",
      }}
    >
      <Typography
        variant="h2"
        style={{ marginTop: "20px", fontFamily: "Copperplate" }}
      >
        Featured Shelters
      </Typography>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <Carousel className="carousel">
          {shelters.slice(0, 5).map((shelter) => (
            <Link
              key={shelter._id}
              to={{
                pathname: `/shelters/${shelter._id}`,
                state: { shelter }, // Pass shelter as state
              }}
              style={{
                textDecoration: "initial",
                color: "initial",
              }}
            >
              <div
                className="image-container"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "50%",
                  overflow: "hidden",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  margin: "0 auto",
                }}
              >
                <img
                  className="background-image"
                  src={`${shelter.image}`}
                  alt={`${shelter.name}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {shelter.name}
                  </Typography>
                  <Typography variant="body1">{shelter.description}</Typography>
                  <Rating
                    className="shelter-rating"
                    name="simple-controlled"
                    value={shelter.rating}
                    readOnly
                    style={{
                      color: "white",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      padding: "10px",
                      direction: "ltr",
                    }}
                    size="small"
                  />
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ShelterCarousel;
