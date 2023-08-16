import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_PETS } from "../utils/queries";
import { Card, CardContent, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

const ShelterDashboard = () => {
  const [getPets, { loading, error, data, refetch }] = useLazyQuery(GET_PETS);

  const shelterId = "64d2dcd0f737eeb85b86fd72";

  useEffect(() => {
    getPets({ variables: { shelterId: shelterId } });
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  // Check if data is available before accessing its properties
  const petList = data && data.pets ? data.pets : [];

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          align="center"
          style={{
            marginBottom: "50px",
            marginTop: "40px",
            fontWeight: "bold",
          }}
        >
          Shelter Dashboard
        </Typography>

        {/* Display Pets */}
        <div className="image-list-container">
          <ImageList cols={4} gap={8}>
            {petList.map((pet) => (
              <ImageListItem key={pet.image} sx={{ width: 350, height: 300 }}>
                <div className="image-container">
                  <img
                    src={`${pet.image}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${pet.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={pet.name}
                    loading="lazy"
                  />
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        {/* Donation Amount Card */}
        <Card style={{ float: "left", marginRight: "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Donation Amount: {/* Placeholder for donation amount */}
            </Typography>
          </CardContent>
        </Card>

        {/* Add Image Form */}
        <div className="App">
          <CloudinaryUploadWidget refetchPets={refetch} />
        </div>
      </div>
    </div>
  );
};

export default ShelterDashboard;
