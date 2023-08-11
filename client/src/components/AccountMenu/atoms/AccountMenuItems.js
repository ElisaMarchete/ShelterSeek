import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

// Icons
import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import AddBusiness from "@mui/icons-material/AddBusiness";

export function DashboardBtn({ handleClose }) {
  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      Dashboard
    </MenuItem>
  );
}

export function MyAccountBtn({ handleClose }) {
  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      My account
    </MenuItem>
  );
}

export function LogoutBtn({ handleClose }) {
  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  );
}

export function LoginBtn({ handleDialogOpen }) {
  return (
    <MenuItem onClick={handleDialogOpen}>
      <ListItemIcon>
        <Login />
      </ListItemIcon>
      Login
    </MenuItem>
  );
}

export function UserSignupBtn({ handleClose }) {
  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <PersonAdd fontSize="small" />
      </ListItemIcon>
      Create an account
    </MenuItem>
  );
}

export function ShelterSignupBtn({ handleClose }) {
  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <AddBusiness fontSize="small" />
      </ListItemIcon>
      Sign up your shelter
    </MenuItem>
  );
}
