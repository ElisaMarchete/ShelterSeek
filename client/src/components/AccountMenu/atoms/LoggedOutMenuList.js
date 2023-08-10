import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

// Icons
import Login from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import AddBusiness from "@mui/icons-material/AddBusiness";

export default function LoggedOutMenuList({ handleClose }) {
  return (
    <>
      {/* Use when the user is not signed in. */}
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Login />
        </ListItemIcon>
        Login
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Create an account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <AddBusiness fontSize="small" />
        </ListItemIcon>
        Sign up your shelter
      </MenuItem>
    </>
  );
}
