import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSnackbars, SnackbarTypes } from "../utils/contexts/";

import {
  Step1Form,
  Step2Form,
  Step3Form,
  Step4Form,

} from "../components/RegisterShelterForms";

import { useMutation } from "@apollo/client";
import { ADD_SHELTER } from "../utils/mutations";
import Auth from "../utils/auth";

const steps = [
  "Tell us about your organization",
  "Create login credentials",
  "Add your shelter's contact info",
  "Add your shelter's payment info",
];

export default function RegisterShelterStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const initialFormData = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    website: "",
    description: "",
    BankTransitNumber: "",
    BankInstitutionNumber: "",
    BankAccount: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [addShelter, { error }] = useMutation(ADD_SHELTER);
  const { open: snack } = useSnackbars();

  const openErrorSnackbar = () => {
    snack(SnackbarTypes.ERROR_SNACKBAR);
  };

  const openSuccessSnackbar = () => {
    snack(SnackbarTypes.SUCCESS_SNACKBAR);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData(initialFormData);
  };

  const handleSubmit = async () => {
    console.log(formData);
    if (error) {
      console.error(error);
    }
    try {
      const { data } = await addShelter({
        variables: { shelterInput: { ...formData } },
      });

      Auth.login(data.addShelter.token);
      openSuccessSnackbar();
    } catch (err) {
      console.error(err);
      openErrorSnackbar();
    }

    handleReset();
  };

  return (
    <Box sx={{ width: "75%", mx: "auto", my: 2, textAlign: "center" }}>
      <Box display={"flex"}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            const stepProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 && (
          <Step1Form formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 1 && (
          <Step2Form formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 2 && (
          <Step3Form formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 3 && (
          <Step4Form formData={formData} setFormData={setFormData} />
        )}
      </Box>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
