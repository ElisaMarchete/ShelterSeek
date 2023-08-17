import React, { createContext, useContext, useState } from "react";

// This context is used to manage the state of the dialogs across the app.
// Only one dialog can be open at a time.

const DialogsContext = createContext();

export const DialogTypes = {
  LOGIN: "LOGIN",
  USER_SIGNUP: "USER_SIGNUP",
  SHELTER_SIGNUP: "SHELTER_SIGNUP",
  COMPLETE_YOUR_PROFILE: "COMPLETE_YOUR_PROFILE",
  PLEASE_LOGIN: "PLEASE_LOGIN",
  SUCCESS_SNACKBAR: "SUCCESS_SNACKBAR",
};

export function DialogsProvider({ children }) {
  const [openDialog, setOpenDialog] = useState(null);

  const close = () => {
    setOpenDialog(null);
  };

  const open = (dialogType) => {
    // If there's already an open dialog, close it then open the new one. Otherwise, just open the dialog.
    openDialog && close();
    setOpenDialog(dialogType);
  };

  return (
    <DialogsContext.Provider value={{ openDialog, open, close }}>
      {children}
    </DialogsContext.Provider>
  );
}

export function useDialogs() {
  return useContext(DialogsContext);
}
