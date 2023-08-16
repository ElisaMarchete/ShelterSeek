import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="white" textAlign="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ShelterSeek
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      className="Footer"
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        width: "100%",
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
