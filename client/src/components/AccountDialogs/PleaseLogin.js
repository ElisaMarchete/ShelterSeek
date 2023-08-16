import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";

export default function PleaseLoginDialog() {
  const { openDialog, close } = useDialogs();

  return (
    <Dialog open={openDialog === DialogTypes.PLEASE_LOGIN} onClose={close}>
      <DialogTitle>User not authenticated</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please login or sign up to continue to this page.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
