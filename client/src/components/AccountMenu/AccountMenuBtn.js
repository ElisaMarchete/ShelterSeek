import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Auth from "../../utils/auth";

export default function AccountMenuBtn({ handleMenuClick, open }) {
  const name = Auth.loggedIn() && Auth.getProfile().data.username;

  const iconSize = {
    width: 48,
    height: 48,
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        ...iconSize,
      },
      children: `${name[0].toUpperCase()}`,
    };
  }

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
          <Avatar {...stringAvatar(name)}></Avatar>
        ) : (
          <AccountCircle sx={{ ...iconSize }} />
        )}
      </IconButton>
    </Box>
  );
}
