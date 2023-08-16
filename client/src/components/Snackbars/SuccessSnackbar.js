import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";

export default function SuccessSnackbar() {
  const { openDialog, close } = useDialogs();

  return (
    <Snackbar
      open={openDialog === DialogTypes.SUCCESS_SNACKBAR}
      autoHideDuration={6000}
      onClose={close}
      message="Success!"
    />
  );
}
