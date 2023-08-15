import React from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

function FilterBar({ filters, setFilters }) {
  const handleInputChange = (event, newValue) => {
    const { name, value, checked } = event.target;

    if (name === "rating") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        rating: newValue === null ? undefined : newValue,
      }));
    } else if (name === "dog" || name === "cat" || name === "rabbit") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked ? checked : undefined,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value === "" ? undefined : value,
      }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <TextField
        label="Shelter Name"
        name={"name"}
        value={filters.name}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
        style={{ borderRadius: "8px", background: "#f2f2f2", width: "40%" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Minimum Rating</Typography>
        <Rating
          label="simple-controlled"
          name="rating"
          value={filters.rating || 0}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
          type="number"
          style={{ color: "#ff9800" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Animals Kept</Typography>
        <FormGroup
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <FormControlLabel
            name="dog"
            control={<Checkbox />}
            label="Dogs"
            value={filters.dog}
            onChange={handleInputChange}
          />
          <FormControlLabel
            name="cat"
            control={<Checkbox />}
            label="Cats"
            value={filters.cat}
            onChange={handleInputChange}
          />
          <FormControlLabel
            name="rabbit"
            control={<Checkbox />}
            label="Rabbits"
            value={filters.rabbit}
            onChange={handleInputChange}
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default FilterBar;
