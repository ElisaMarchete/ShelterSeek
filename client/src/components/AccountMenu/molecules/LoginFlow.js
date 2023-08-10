import * as React from "react";
import { LoginDialog, LoginBtn } from "../atoms";

export default function LoginFlow({ handleMenuClose }) {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    // handleMenuClose();
    // TODO
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // TODO: Add login functionality
  const handleLogin = () => {
    alert("You have logged in!");
  };

  return (
    <>
      <LoginBtn {...{ handleDialogOpen }} />
      <LoginDialog {...{ dialogOpen, handleDialogClose, handleLogin }} />
    </>
  );
}
