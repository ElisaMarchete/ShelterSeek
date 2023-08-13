import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Auth from "../../utils/auth";

export default function AccountMenuBtn({ handleMenuClick, open }) {
  const initial =
    Auth.loggedIn() && Auth.getProfile().data.username[0].toUpperCase();

  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <IconButton
        onClick={handleMenuClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {Auth.loggedIn() ? (
          <Avatar sx={{ width: 32, height: 32 }}>{initial}</Avatar>
        ) : (
          <AccountCircle sx={{ width: 32, height: 32 }} />
        )}
      </IconButton>
    </Box>
  );
}
