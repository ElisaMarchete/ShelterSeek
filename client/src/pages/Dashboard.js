import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_PETS } from "../utils/mutations";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

const ShelterDashboard = () => {
  const [addPet] = useMutation(ADD_PETS);
  const [image, setImage] = useState("");

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

        {/* Profile Card */}
        <Card style={{ float: "left", marginRight: "20px" }}>
          <CardContent>
            {/* Placeholder for grabbing image from a URL */}
            <img
              src="YOUR_PROFILE_IMAGE_URL"
              alt="Profile"
              style={{ width: "100px", height: "100px" }}
            />
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

        {/* adding image with Cloudinary */}
        <div className="App">
          <CloudinaryUploadWidget />
          <p>
            <a
              href="https://cloudinary.com/documentation/upload_widget"
              target="_blank"
              rel="noreferrer"
            >
              {/* Upload Widget User Guide */}
            </a>
          </p>
          <p>
            <a
              href="https://cloudinary.com/documentation/upload_widget_reference"
              target="_blank"
              rel="noreferrer"
            >
              {/* Upload Widget Reference */}
            </a>
          </p>
          <img id="uploadedimage" src=""></img>
        </div>
      </div>
    </div>
  );
};

export default ShelterDashboard;
