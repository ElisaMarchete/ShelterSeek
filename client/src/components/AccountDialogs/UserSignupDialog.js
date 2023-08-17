import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import {
  useDialogs,
  DialogTypes,
  useSnackbars,
  SnackbarTypes,
} from "../../utils/contexts/";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function UserSignupDialog() {
  const { openDialog, close } = useDialogs();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addUser] = useMutation(ADD_USER);

  const { open } = useSnackbars();

  const openErrorSnackbar = () => {
    open(SnackbarTypes.ERROR_SNACKBAR);
  };

  const openSuccessSnackbar = () => {
    open(SnackbarTypes.SUCCESS_SNACKBAR);
  };

  const handleUserSignup = async (event) => {
    event.preventDefault();
    const usernameInput = username;
    const emailInput = email;
    const passwordInput = password;

    try {
      const { data } = await addUser({
        variables: {
          userInput: {
            username: usernameInput,
            email: emailInput,
            password: passwordInput,
          },
        },
      });
      Auth.login(data.addUser.token);
      openSuccessSnackbar();
    } catch (err) {
      console.error(err);
      openErrorSnackbar();
    }
  };

  return (
    <Dialog open={openDialog === DialogTypes.USER_SIGNUP} onClose={close}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Create a ShelterSeek to account to add shelters to your watchlist.
        </DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          type="username"
          fullWidth
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email address"
          type="email"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/register-shelter" variant="body2">
              Signing up as a shelter? Register here.
            </Link>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={(event) => handleUserSignup(event)}>Sign Up</Button>
      </DialogActions>
    </Dialog>
  );
}
