import AccountMenu from "./AccountMenu";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header className="Header">
      <Typography
        variant="h1"
        component={Link}
        to="/"
        className="no-link-style"
      >
        ShelterSeek
      </Typography>
      {children}
      <AccountMenu />
    </header>
  );
}

export default Header;
