import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";

export default function LoginDialog({ handleLogin }) {
  const { openDialog, close } = useDialogs();

  return (
    <Dialog open={openDialog === DialogTypes.LOGIN} onClose={close}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Login to your ShelterSeek account to access your account information.
        </DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="login-email"
          label="Email Address"
          type="email"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="login-password"
          label="Password"
          type="password"
          fullWidth
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={handleLogin}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}