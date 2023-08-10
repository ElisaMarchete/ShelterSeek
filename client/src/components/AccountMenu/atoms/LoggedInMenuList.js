import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

// Icons
import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";

export default function LoggedInMenuList({ handleClose }) {
  return (
    <>
      {/* Use when the user is signed in. */}
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
}
