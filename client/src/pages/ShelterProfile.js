import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { useDialogs, DialogTypes } from "../utils/contexts/";
import {
  ShelterProfileForm,
  ManageShelterForm,
  PaymentInfoForm,
} from "../components/ShelterProfile";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShelterProfile() {
  const shelterIsNew = () => {
    return document.referrer.includes("/register-shelter") ? true : false;
  };
  const [value, setValue] = useState(0);
  const { open } = useDialogs();

  useEffect(() => {
    if (shelterIsNew()) {
      setValue(1);
      open(DialogTypes.COMPLETE_YOUR_PROFILE);
      return;
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Shelter profile tabs"
          centered
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Manage shelter" {...a11yProps(1)} />
          <Tab label="Payment information" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ShelterProfileForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ManageShelterForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PaymentInfoForm />
      </CustomTabPanel>
    </Container>
  );
}
