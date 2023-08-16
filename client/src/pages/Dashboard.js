import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_PETS } from "../utils/queries";
import { Card, CardContent, Typography } from "@mui/material";
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
        <Card style={{ float: "left", marginRight: "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Pets in Shelter
            </Typography>
            {petList.map((pet) => (
              <Card key={pet.id} style={{ marginBottom: "20px" }}>
                <CardContent>
                  <Typography variant="body1">{pet.name}</Typography>
                  <img src={pet.image} alt="pet" style={{ maxWidth: "100%" }} />
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

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
