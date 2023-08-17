import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { UPDATE_SHELTER } from "../../utils/mutations";
import { useSnackbars, SnackbarTypes } from "../../utils/contexts/";

export default function ManageShelterForm(props) {
  const { loading, error, data } = useQuery(GET_ME);
  const initialFormData = {
    dog: false,
    cat: false,
    rabbit: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const initialUserData = useRef(initialFormData);
  const { open } = useSnackbars();

  const [updateShelter, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_SHELTER);

  const handleCheckboxChange = (field) => (event) => {
    const newValue = event.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      [field]: newValue,
    }));
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
      await updateShelter({ variables: { shelterInput } });
      openSuccessSnackbar();
    } catch (err) {
      console.error(err);
      openErrorSnackbar();
    }
  };

  // Upon successful load, update state with the user's existing data.
  useEffect(() => {
    if (!loading && data.me) {
      setFormData({
        dog: data.me?.dog || false,
        cat: data.me?.cat || false,
        rabbit: data.me?.rabbit || false,
      });
      initialUserData.current.dog = data.me?.dog || false;
      initialUserData.current.cat = data.me?.cat || false;
      initialUserData.current.rabbit = data.me?.rabbit || false;
    }
  }, [loading, data]);

  if (loading || updateLoading) {
    return <CircularProgress />;
  }

  if (error || updateError) {
    console.error(error);
  }

  return (
    <Container>
      <Container
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{ m: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Animals in your shelter's care
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.dog}
                  onChange={handleCheckboxChange("dog")}
                />
              }
              label="Dogs"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.cat}
                  onChange={handleCheckboxChange("cat")}
                />
              }
              label="Cats"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rabbit}
                  onChange={handleCheckboxChange("rabbit")}
                />
              }
              label="Rabbits"
            />
          </FormGroup>
        </Box>
        <Box sx={{ m: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Upload images
          </Typography>
          <TextField
            sx={{ m: 2 }}
            disabled={true}
            autoFocus
            margin="dense"
            id="shelter-name"
            label="Name of shelter"
            type="username"
            fullWidth
            // value={formData.name}
            // onChange={(event) => handleInputChange("name", event.target.value)}
          />
        </Box>
      </Container>
      <Box display={"flex"} justifyContent={"flex-end"}>
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
  );
}
