import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function AccountMenuBtn({ handleClick, open, isLoggedIn }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {isLoggedIn ? (
          // TODO: Replace with username's first letter
          <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
        ) : (
          <AccountCircle sx={{ width: 32, height: 32 }} />
        )}
      </IconButton>
    </Box>
  );
}
