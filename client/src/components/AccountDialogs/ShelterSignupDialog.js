import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";

export default function ShelterSignupDialog() {
  const { openDialog, close } = useDialogs();

  return (
    <Dialog open={openDialog === DialogTypes.SHELTER_SIGNUP} onClose={close}>
      <DialogTitle>Register your shelter</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to ShelterSeek, where compassion meets action.
          <br />
          <br />
          By registering your shelter, you're taking the first step in
          connecting animals in need with the care and support they deserve.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={close} component={Link} to="/register-shelter">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}
