import React from "react";
import Divider from "@mui/material/Divider";
import { UserSignupBtn, ShelterSignupBtn } from "../atoms";
import LoginFlow from "./LoginFlow";

export default function LoggedOutMenuList({ handleMenuClose }) {
  return (
    <>
      <LoginFlow {...{ handleMenuClose }} />
      <Divider />
      <UserSignupBtn {...{ handleMenuClose }} />
      <ShelterSignupBtn {...{ handleMenuClose }} />
    </>
  );
}
