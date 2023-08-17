import React from "react";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

// Icons
import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import AddBusiness from "@mui/icons-material/AddBusiness";
import Pets from "@mui/icons-material/Pets";

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
  };

  return (
    <>
      <MenuItem component={Link} to="/dashboard">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      {Auth.getProfile().data.role === "shelter" && (
        <MenuItem component={Link} to="/shelter-profile">
          <ListItemIcon>
            <Pets />
          </ListItemIcon>
          My shelter
        </MenuItem>
      )}
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
