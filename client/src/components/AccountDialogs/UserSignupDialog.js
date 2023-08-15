import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function UserSignupDialog() {
  const { openDialog, close } = useDialogs();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleUserSignup = async (event) => {
    event.preventDefault();
    const usernameInput = username;
    const emailInput = email;
    const passwordInput = password;

    if (error) {
      alert(error.message);
    }

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
    } catch (err) {
      console.error(err);
    }
  };

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
          id="username"
          label="Username"
          type="username"
          fullWidth
          variant="filled"
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
          variant="filled"
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
          variant="filled"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={(event) => handleUserSignup(event)}>Sign Up</Button>
      </DialogActions>
    </Dialog>
  );
}
