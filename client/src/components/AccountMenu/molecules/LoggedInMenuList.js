import React from "react";
import Divider from "@mui/material/Divider";
import { DashboardBtn, MyAccountBtn, LogoutBtn } from "../atoms";

export default function LoggedInMenuList({ handleClose }) {
  return (
    <>
      <DashboardBtn {...{ handleClose }} />
      <MyAccountBtn {...{ handleClose }} />
      <Divider />
      <LogoutBtn {...{ handleClose }} />
    </>
  );
}
