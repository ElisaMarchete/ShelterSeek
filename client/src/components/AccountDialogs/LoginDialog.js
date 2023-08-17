import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import {
  useDialogs,
  DialogTypes,
  useSnackbars,
  SnackbarTypes,
} from "../../utils/contexts";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function LoginDialog() {
  const { openDialog, close } = useDialogs();
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const { open } = useDialogs();
  const { open: snack } = useSnackbars();

  const openUserSignupDialog = () => {
    open(DialogTypes.USER_SIGNUP);
  };

  const openErrorSnackbar = () => {
    snack(SnackbarTypes.ERROR_SNACKBAR);
  };

  const openSuccessSnackbar = () => {
    snack(SnackbarTypes.SUCCESS_SNACKBAR);
  };

  const handleLogin = async (event) => {
    const loginNameInput = loginName;
    const loginPasswordInput = loginPassword;

    try {
      const { data } = await loginUser({
        variables: {
          loginName: loginNameInput,
          loginPassword: loginPasswordInput,
        },
      });
      Auth.login(data.login.token);
      openSuccessSnackbar();
    } catch (err) {
      console.error(err);
      openErrorSnackbar();
    }
  };

  return (
    <Dialog open={openDialog === DialogTypes.LOGIN} onClose={close}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Login to your ShelterSeek account to access your account information.
        </DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="login-name"
          label="Email address"
          type="email"
          fullWidth
          value={loginName}
          onChange={(event) => setLoginName(event.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="login-password"
          label="Password"
          type="password"
          fullWidth
          value={loginPassword}
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2" onClick={openUserSignupDialog}>
              Don't have an account? Sign up here.
            </Link>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={handleLogin}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}
