import React from "react";
import Menu from "@mui/material/Menu";
import { LoggedInMenuList, LoggedOutMenuList } from "./AccountMenuLists";
import Auth from "../../utils/auth";

export default function AccountMenuPopover({
  anchorEl,
  open,
  handleMenuClose,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      // Lets you close the menu by clicking away from it
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {Auth.loggedIn() ? (
        <LoggedInMenuList {...{ handleMenuClose }} />
      ) : (
        <LoggedOutMenuList {...{ handleMenuClose }} />
      )}
    </Menu>
  );
}
