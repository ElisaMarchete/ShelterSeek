import React from "react";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Auth from "../../utils/auth";

// Icons
import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import AddBusiness from "@mui/icons-material/AddBusiness";

// Dialogs
import { DialogTypes, useDialogs } from "../../utils/contexts/DialogsContext";

// Two different menu lists depending on whether the user is logged in or not.

export function LoggedOutMenuList() {
  const { open } = useDialogs();

  const openLoginDialog = () => {
    open(DialogTypes.LOGIN);
  };

  const openUserSignupDialog = () => {
    open(DialogTypes.USER_SIGNUP);
  };

  const openShelterSignupDialog = () => {
    open(DialogTypes.SHELTER_SIGNUP);
  };

  return (
    <>
      <MenuItem onClick={openLoginDialog}>
        <ListItemIcon>
          <Login />
        </ListItemIcon>
        Login
      </MenuItem>
      <Divider />
      <MenuItem onClick={openUserSignupDialog}>
        <ListItemIcon>
          <PersonAdd />
        </ListItemIcon>
        Create your account
      </MenuItem>
      <MenuItem onClick={openShelterSignupDialog}>
        <ListItemIcon>
          <AddBusiness />
        </ListItemIcon>
        Register your shelter
      </MenuItem>
    </>
  );
}

export function LoggedInMenuList() {
  const handleLogout = () => {
    Auth.logout();
    window.location.replace("/");
  };

  return (
    <>
      <MenuItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
}
