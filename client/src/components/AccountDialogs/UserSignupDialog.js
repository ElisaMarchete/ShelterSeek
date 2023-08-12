import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";

export default function UserSignupDialog({ handleLogin }) {
  const { openDialog, close } = useDialogs();

  return (
    <Dialog open={openDialog === DialogTypes.USER_SIGNUP} onClose={close}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Create a ShelterSeek to account to add shelters to your watchlist.
          blah blah.
        </DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="email2"
          label="Email Address"
          type="user-email"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="password2"
          label="Password"
          type="user-password"
          fullWidth
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={handleLogin}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
}
