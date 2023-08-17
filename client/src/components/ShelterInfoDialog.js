import { useMutation } from "@apollo/client";
import { ADD_SHELTER } from "../utils/mutations"; // Import your mutation query
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddShelterForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    website: "",
    description: "",
    image: "",
    BankTransitNumber: "",
    BankInstitutionNumber: "",
    BankAccount: "",
  });
  const [addShelterMutation, { error }] = useMutation(ADD_SHELTER);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addShelterMutation({
        variables: { ...formData },
      });
    } catch (error) {
      console.error("Error adding shelter:", error.message);
    }
    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      website: "",
      description: "",
      image: "",
      BankTransitNumber: "",
      BankInstitutionNumber: "",
      BankAccount: "",
    });
  };

  return (
    <div>
      <h2>Add Shelter</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="BankTransitNumber"
          value={formData.BankTransitNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="BankInstitutionNumber"
          value={formData.BankInstitutionNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="BankAccount"
          value={formData.BankAccount}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Add Shelter</button>
      </form>

      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default AddShelterForm;
