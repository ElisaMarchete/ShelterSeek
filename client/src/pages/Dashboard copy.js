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

const ShelterDashboard = () => {
  const [addPet] = useMutation(ADD_PETS);

  // const [selectedPet, setSelectedPet] = useState(null);
  // const [pets, setPets] = useState([]);
  // const [newPet, setNewPet] = useState({
  //   name: "",
  //   description: "",
  //   imageUrl: "",
  // });
  // const [openDialog, setOpenDialog] = useState(false);

  // const handleInputChange = (e) => {
  //   setNewPet({
  //     ...newPet,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleAddPet = () => {
  //   const id = Math.floor(Math.random() * 10000);
  //   const petWithId = { ...newPet, id };
  //   setPets([...pets, petWithId]);
  //   setOpenDialog(false);
  //   setNewPet({ name: "", description: "", imageUrl: "" });
  // };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "20px" }}
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

        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenDialog(true)}
          style={{ float: "right", marginBottom: "20px" }}
        >
          Add Pets for Adoption
        </Button> */}

        {/* <div style={{ clear: "both" }}></div> */}

        {/* <div>
          {pets.map((pet) => (
            <Card
              key={pet.id}
              style={{
                margin: "10px",
                display: "inline-block",
                width: "200px",
                backgroundColor: "white",
              }}
              onMouseEnter={() => setSelectedPet(pet)}
              onMouseLeave={() => setSelectedPet(null)}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pet.name}
                  </Typography>
                  {selectedPet && selectedPet.id === pet.id && (
                    <img
                      src={pet.imageUrl}
                      alt={pet.name}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div> */}

        {/* <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Add New Pet</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Pet Name"
              type="text"
              fullWidth
              value={newPet.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              value={newPet.description}
              onChange={handleInputChange}
            />
            <input type="file" />
            {newPet.imageUrl && (
              <img
                src={newPet.imageUrl}
                alt="Uploaded preview"
                style={{ width: "100%", height: "auto", marginTop: "20px" }}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddPet} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog> */}
      </div>
    </div>
  );
};

export default ShelterDashboard;
