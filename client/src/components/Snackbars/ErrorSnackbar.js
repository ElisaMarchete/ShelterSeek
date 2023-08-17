import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
  useSnackbars,
  SnackbarTypes,
} from "../../utils/contexts/SnackbarsContext.js";

export default function ErrorSnackbar() {
  const { openSnackbar, close } = useSnackbars();

  return (
    <Snackbar
      open={openSnackbar === SnackbarTypes.ERROR_SNACKBAR}
      autoHideDuration={5000}
      onClose={close}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={close}
        severity="error"
        // variant="filled"
        sx={{ width: "100%" }}
      >
        We encountered an error! Please try again.
      </Alert>
    </Snackbar>
  );
}
