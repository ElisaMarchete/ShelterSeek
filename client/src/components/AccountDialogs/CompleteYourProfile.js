import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";

export default function CompleteYourProfileDialog() {
  const { openDialog, close } = useDialogs();

  return (
    <Dialog
      open={openDialog === DialogTypes.COMPLETE_YOUR_PROFILE}
      onClose={close}
    >
      <DialogTitle>Complete your shelter's profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to our platform! To make the most of your experience, please
          take a moment to complete your shelter's profile by uploading images.
          <br />
          <br />
          Adding images to your shelter's profile helps potential supporters
          learn more about your shelter and the animals in your care.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={close}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
}
