import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const StepTemplate = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "24px",
        m: 3,
        width: "63%",
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export const Step1Form = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  return (
    <StepTemplate>
      <TextField
        sx={{ m: 2 }}
        required
        autoFocus
        margin="dense"
        id="shelter-name"
        label="Name of shelter"
        type="username"
        fullWidth
        value={formData.name}
        onChange={(event) => handleInputChange("name", event.target.value)}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="shelter-description"
        label="Description"
        multiline
        rows={4}
        fullWidth
        value={formData.description}
        onChange={(event) =>
          handleInputChange("description", event.target.value)
        }
      />
    </StepTemplate>
  );
};

export const Step2Form = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  return (
    <StepTemplate>
      <TextField
        sx={{ m: 2 }}
        required
        autoFocus
        margin="dense"
        id="email"
        label="Email address"
        type="email"
        fullWidth
        value={formData.email}
        onChange={(event) => handleInputChange("email", event.target.value)}
      />
      <TextField
        sx={{ m: 2 }}
        required
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
        value={formData.password}
        onChange={(event) => handleInputChange("password", event.target.value)}
      />
    </StepTemplate>
  );
};

export const Step3Form = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  return (
    <StepTemplate>
      <TextField
        sx={{ m: 2 }}
        required
        margin="dense"
        id="address"
        label="Street address"
        type="address"
        fullWidth
        value={formData.address}
        onChange={(event) => handleInputChange("address", event.target.value)}
      />
      <TextField
        sx={{ m: 2 }}
        required
        margin="dense"
        id="phone"
        label="Phone number"
        type="phone"
        fullWidth
        value={formData.phone}
        onChange={(event) => handleInputChange("phone", event.target.value)}
      />
      <TextField
        sx={{ m: 2 }}
        margin="dense"
        id="website"
        label="Website"
        fullWidth
        value={formData.website}
        onChange={(event) => handleInputChange("website", event.target.value)}
      />
    </StepTemplate>
  );
};

// Banking info
export const Step4Form = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  return (
    <StepTemplate>
      <TextField
        sx={{ m: 2 }}
        required
        autoFocus
        margin="dense"
        id="username"
        label="Bank transit number"
        fullWidth
        value={formData.BankTransitNumber}
        onChange={(event) =>
          handleInputChange("BankTransitNumber", event.target.value)
        }
      />
      <TextField
        sx={{ m: 2 }}
        required
        margin="dense"
        id="email"
        label="Bank institution number"
        fullWidth
        value={formData.BankInstitutionNumber}
        onChange={(event) =>
          handleInputChange("BankInstitutionNumber", event.target.value)
        }
      />
      <TextField
        sx={{ m: 2 }}
        required
        margin="dense"
        id="password"
        label="Bank account"
        fullWidth
        value={formData.BankAccount}
        onChange={(event) =>
          handleInputChange("BankAccount", event.target.value)
        }
      />
    </StepTemplate>
  );
};
