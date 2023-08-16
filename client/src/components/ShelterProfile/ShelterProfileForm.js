import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";

export default function ShelterProfileForm(props) {
  const { loading, error, data } = useQuery(GET_ME);

  const handleClick = async () => {
    console.log({ data, error, loading });
  };

  return (
    <Container>
      <Container sx={{ display: "flex" }}>
        <Box sx={{ m: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Your shelter
          </Typography>
          <TextField
            sx={{ m: 2 }}
            required
            autoFocus
            margin="dense"
            id="shelter-name"
            label="Name of shelter"
            type="username"
            fullWidth
            // value={formData.name}
            // onChange={(event) => handleInputChange("name", event.target.value)}
          />
          <TextField
            sx={{ m: 2 }}
            required
            id="shelter-description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            // value={formData.description}
            // onChange={(event) =>
            //   handleInputChange("description", event.target.value)
            // }
          />
        </Box>
        <Box sx={{ m: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Contact information
          </Typography>
          <TextField
            sx={{ m: 2 }}
            required
            autoFocus
            margin="dense"
            id="address"
            label="Street address"
            fullWidth
            // value={username}
            // onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            sx={{ m: 2 }}
            required
            margin="dense"
            id="phone"
            label="Phone number"
            fullWidth
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            sx={{ m: 2 }}
            margin="dense"
            id="website"
            label="Website"
            fullWidth
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
      </Container>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Button variant="contained" onClick={handleClick}>
          Save changes
        </Button>
      </Box>
    </Container>
  );
}
