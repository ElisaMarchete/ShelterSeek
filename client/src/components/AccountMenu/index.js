import * as React from "react";
import { AccountMenuBtn } from "./atoms";
import { AccountMenuPopover } from "./molecules";

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AccountMenuBtn {...{ open, handleClick }} />
      <AccountMenuPopover {...{ open, handleClose, anchorEl }} />
    </>
  );
}
