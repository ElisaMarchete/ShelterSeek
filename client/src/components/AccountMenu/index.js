import * as React from "react";
import AccountMenuBtn from "./AccountMenuBtn";
import AccountMenuPopover from "./AccountMenuPopover";

export default function AccountMenu({ isLoggedIn }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AccountMenuBtn {...{ open, handleMenuClick }} />
      <AccountMenuPopover
        {...{ open, handleMenuClose, anchorEl, isLoggedIn }}
      />
    </>
  );
}
