import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
  useSnackbars,
  SnackbarTypes,
} from "../../utils/contexts/SnackbarsContext.js";

export default function SuccessSnackbar({ msg }) {
  const { openSnackbar, close } = useSnackbars();

  return (
    <Snackbar
      open={openSnackbar === SnackbarTypes.SUCCESS_SNACKBAR}
      autoHideDuration={5000}
      onClose={close}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={close}
        severity="success"
        // variant="filled"
        sx={{ width: "100%" }}
      >
        Success!
      </Alert>
    </Snackbar>
  );
}
