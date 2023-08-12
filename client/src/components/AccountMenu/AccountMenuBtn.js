import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function AccountMenuBtn({ handleMenuClick, open, isLoggedIn }) {
  const initial = "P";

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
        {isLoggedIn ? (
          // TODO: Replace with username's first letter
          <Avatar sx={{ width: 32, height: 32 }}>{initial}</Avatar>
        ) : (
          <AccountCircle sx={{ width: 32, height: 32 }} />
        )}
      </IconButton>
    </Box>
  );
}