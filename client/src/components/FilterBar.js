import React from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";

function FilterBar({ filters, setFilters }) {
  // const handleNameChange = (event) => {
  //   const { name, value } = event.target;

  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     name: value ? value : undefined,
  //   }));
  // };

  // const handleRatingChange = (event, newValue) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     rating: newValue >= 0 ? newValue : undefined,
  //   }));
  // };

  const handleInputChange = (event, newValue) => {
    const { name, value } = event.target;

    if (name === "rating") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        rating: newValue === null ? undefined : newValue,
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
        value={filters.name || undefined}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
        style={{ borderRadius: "8px", background: "#f2f2f2", width: "40%" }}
      />
      <Rating
        label="simple-controlled"
        name="rating"
        value={filters.rating || undefined}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*", max: 5, min: 0 }}
        style={{ color: "#ff9800" }}
      />
    </div>
  );
}

export default FilterBar;
