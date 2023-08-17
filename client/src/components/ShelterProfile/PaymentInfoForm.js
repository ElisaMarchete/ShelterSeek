import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { DialogTypes, useDialogs } from "../../utils/contexts/DialogsContext";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { UPDATE_SHELTER } from "../../utils/mutations";

export default function PaymentInfoForm(props) {
  const { loading, error, data } = useQuery(GET_ME);
  const initialFormData = {
    BankTransitNumber: "",
    BankInstitutionNumber: "",
    BankAccount: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const initialUserData = useRef(initialFormData);
  const [updateShelter, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_SHELTER);
  const { open } = useDialogs();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleRevertChanges = () => {
    setFormData(initialUserData.current);
  };

  const openSuccessSnackbar = () => {
    open(DialogTypes.SUCCESS_SNACKBAR);
  };

  const handleSubmit = async (event) => {
    const shelterInput = { ...formData };
    if (!formData.password) delete shelterInput.password;
    updateShelter({ variables: { shelterInput } });
    openSuccessSnackbar();
  };

  // Upon successful load, update state with the user's existing data.
  useEffect(() => {
    if (!loading && data.me) {
      setFormData({
        BankAccount: data.me.BankAccount,
        BankInstitutionNumber: data.me.BankInstitutionNumber,
        BankTransitNumber: data.me.BankTransitNumber,
      });
      initialUserData.current = data.me;
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
      <Container sx={{ width: "50%" }}>
        <Container sx={{ m: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Banking information
          </Typography>
          <TextField
            sx={{ m: 2 }}
            autoFocus
            margin="dense"
            id="bank-transit-number"
            label="Bank transit number"
            fullWidth
            value={formData.BankTransitNumber}
            onChange={(event) =>
              handleInputChange("BankTransitNumber", event.target.value)
            }
          />
          <TextField
            sx={{ m: 2 }}
            margin="dense"
            id="bank-institution-number"
            label="Bank institution number"
            fullWidth
            value={formData.BankInstitutionNumber}
            onChange={(event) =>
              handleInputChange("BankInstitutionNumber", event.target.value)
            }
          />
          <TextField
            sx={{ m: 2 }}
            margin="dense"
            id="bank-account"
            label="Bank account number"
            fullWidth
            value={formData.BankAccount}
            onChange={(event) =>
              handleInputChange("BankAccount", event.target.value)
            }
          />
        </Container>
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
