import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_PETS } from "../utils/queries";
import { Card, CardContent, Typography } from "@mui/material";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

const ShelterDashboard = () => {
  const [getPets, { loading, error, data }] = useLazyQuery(GET_PETS);

  // const [petData, setPetData] = useState({
  //   image: "",
  // });

  // get the shelter id
  const shelterId = "64d2dcd0f737eeb85b86fd72";

  useEffect(() => {
    getPets({ variables: { shelterId: shelterId } });
  }, []);

  console.log(data.pets[0].image);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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

        <Card style={{ float: "left", marginRight: "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Pets in Shelter
            </Typography>
            {data.pets.map((pet) => (
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
              Donation Amount:{" "}
              {/* Placeholder for fetching donation amount from server */}
            </Typography>
          </CardContent>
        </Card>

        {/* open the add image form */}
        <div className="App">
          <CloudinaryUploadWidget />
        </div>
      </div>
    </div>
  );
};

export default ShelterDashboard;
