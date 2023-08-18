import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { UPDATE_SHELTER } from "../../utils/mutations";
import { useSnackbars, SnackbarTypes } from "../../utils/contexts/";

export default function ShelterProfileForm(props) {
  const { loading, error, data } = useQuery(GET_ME);
  const initialFormData = {
    name: "",
    description: "",
    address: "",
    phone: "",
    website: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const initialUserData = useRef(initialFormData);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [updateShelter, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_SHELTER);
  const { open } = useSnackbars();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleRevertChanges = () => {
    setFormData(initialUserData.current);
  };

  const openSuccessSnackbar = () => {
    open(SnackbarTypes.SUCCESS_SNACKBAR);
  };

  const openErrorSnackbar = () => {
    open(SnackbarTypes.ERROR_SNACKBAR);
  };

  const handleSubmit = async (event) => {
    try {
      const shelterInput = { ...formData };
      if (!formData.password) delete shelterInput.password;
      await updateShelter({ variables: { shelterInput } });
      openSuccessSnackbar();
    } catch (error) {
      console.error(error);
      openErrorSnackbar();
    }
  };

  // Upon successful load, update state with the user's existing data.
  useEffect(() => {
    if (!loading && data?.me) {
      setFormData({
        name: data.me.name,
        description: data.me.description,
        address: data.me.address,
        phone: data.me.phone,
        website: data.me.website,
        email: data.me.email,
        password: "",
      });
      initialUserData.current = { ...data.me, password: "" };
    }
  }, [loading, data]);

  if (loading || updateLoading) {
    return <CircularProgress />;
  }

  if (error || updateError) {
    console.error(error);
  }

  return (
    <div>
      <Container>
        <Container sx={{ display: "flex" }}>
          <Box sx={{ m: 2 }}>
            <div>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Your shelter
              </Typography>
            </div>
            <TextField
              sx={{ m: 2 }}
              disabled={true}
              autoFocus
              margin="dense"
              id="shelter-name"
              label="Name of shelter"
              type="username"
              fullWidth
              value={formData.name}
              onChange={(event) =>
                handleInputChange("name", event.target.value)
              }
            />
            <TextField
              sx={{ m: 2 }}
              id="shelter-description"
              label="Description"
              multiline
              rows={8}
              fullWidth
              value={formData.description}
              onChange={(event) =>
                handleInputChange("description", event.target.value)
              }
            />
          </Box>
          <Box sx={{ m: 2 }}>
            <div>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Contact information
              </Typography>
            </div>
            <TextField
              sx={{ m: 2 }}
              autoFocus
              margin="dense"
              id="address"
              label="Street address"
              fullWidth
              value={formData.address}
              onChange={(event) =>
                handleInputChange("address", event.target.value)
              }
            />
            <TextField
              sx={{ m: 2 }}
              margin="dense"
              id="phone"
              label="Phone number"
              fullWidth
              value={formData.phone}
              onChange={(event) =>
                handleInputChange("phone", event.target.value)
              }
            />
            <TextField
              sx={{ m: 2 }}
              margin="dense"
              id="website"
              label="Website"
              fullWidth
              value={formData.website}
              onChange={(event) =>
                handleInputChange("website", event.target.value)
              }
            />
            <Box>
              <TextField
                sx={{ m: 2 }}
                disabled={showPasswordField ? false : true}
                margin="dense"
                id="email"
                label="Email address"
                type="email"
                fullWidth
                value={formData.email}
                onChange={(event) =>
                  handleInputChange("email", event.target.value)
                }
              />
              {showPasswordField && (
                <TextField
                  sx={{ m: 2 }}
                  id="password"
                  label="New password"
                  type="password"
                  margin="dense"
                  fullWidth
                  value={formData.password}
                  onChange={(event) =>
                    handleInputChange("password", event.target.value)
                  }
                />
              )}
            </Box>
          </Box>
        </Container>
        <Box display={"flex"} justifyContent={"flex-end"}>
          {!showPasswordField && (
            <Button
              sx={{ mx: 2 }}
              variant="contained"
              onClick={() => {
                setShowPasswordField(!showPasswordField);
              }}
            >
              Update login credentials
            </Button>
          )}
          <Button
            sx={{ mx: 2 }}
            variant="contained"
            color="warning"
            onClick={handleRevertChanges}
          >
            Revert changes
          </Button>
          <Button sx={{ mx: 2 }} variant="contained" onClick={handleSubmit}>
            Save changes
          </Button>
        </Box>
      </Container>
    </div>
  );
}
