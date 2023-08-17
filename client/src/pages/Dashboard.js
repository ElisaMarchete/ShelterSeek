import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_PETS, GET_DONATION } from "../utils/queries";
import { Card, CardContent, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import auth from "../utils/auth";

const ShelterDashboard = () => {
  const [getPets, { loading, error, data, refetch }] = useLazyQuery(GET_PETS);
  const [
    getDonation,
    { loading: loadingDonation, error: errorDonation, data: dataDonation },
  ] = useLazyQuery(GET_DONATION);

  const isLoggedIn = auth.loggedIn();
  const user = isLoggedIn ? auth.getProfile() : null;
  const shelterId = user ? user.data._id : null;

  useEffect(() => {
    if (shelterId) {
      getPets({ variables: { shelterId: shelterId } });
      getDonation({ variables: { shelterId: shelterId } });
    }
  }, [shelterId]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const petList = data?.pets || [];
  const totalDonations = dataDonation?.totalDonations;

  const formattedTotalDonations = totalDonations?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          align="center"
          style={{
            marginBottom: "30px",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          Shelter Dashboard
        </Typography>

        {/* Donation Amount and Button Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Card style={{ width: "400px", height: "110px" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                align="center"
              >
                Donation Received
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ fontWeight: "bold", marginTop: "10px", fontSize: 25 }}
              >
                {formattedTotalDonations} CAD
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="CloudinaryBtn">
          <CloudinaryUploadWidget refetchPets={refetch} shelterId = {shelterId} />
        </div>

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
      </div>
    </div>
  );
};

export default ShelterDashboard;
