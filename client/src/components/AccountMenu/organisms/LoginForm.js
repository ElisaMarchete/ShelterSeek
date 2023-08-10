import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function LoginForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // TODO: Add login functionality
  const handleLogin = () => {
    alert("You have logged in!");
  };

  return (
    <div>
      {/* <Button className="header-button" onClick={handleClickOpen}>
        <AccountCircle />
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Log in to your ShelterSeek account to access your account
            information.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="filled"
          />
          <TextField
            required
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogin}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
