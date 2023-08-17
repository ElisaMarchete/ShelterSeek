import React, { createContext, useContext, useState } from "react";

// This context is used to manage the state of snackbars across the app.

const SnackbarsContext = createContext();

export const SnackbarTypes = {
  SUCCESS_SNACKBAR: "SUCCESS_SNACKBAR",
  ERROR_SNACKBAR: "ERROR_SNACKBAR",
};

export function SnackbarsProvider({ children }) {
  const [openSnackbar, setOpenSnackbar] = useState(null);

  const close = () => {
    setOpenSnackbar(null);
  };

  const open = (dialogType) => {
    // If there's already an open dialog, close it then open the new one. Otherwise, just open the dialog.
    openSnackbar && close();
    setOpenSnackbar(dialogType);
  };

  return (
    <SnackbarsContext.Provider value={{ openSnackbar, open, close }}>
      {children}
    </SnackbarsContext.Provider>
  );
}

export function useSnackbars() {
  return useContext(SnackbarsContext);
}
