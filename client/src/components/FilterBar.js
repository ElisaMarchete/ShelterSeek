import React from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { textAlign } from "@mui/system";

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
    <div className="FilterBar">
      <div className="filter-selections">
        <TextField
          className="name-filter"
          label="Shelter Name"
          name="name"
          value={filters.name}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { textAlign: "center" } }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            className="rating-filter"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h8"
              style={{
                marginBottom: "5px",
                fontWeight: "bolder",
              }}
            >
              Minimum Rating
            </Typography>
            <Rating
              label="simple-controlled"
              name="rating"
              value={filters.rating || 0}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
              type="number"
              style={{ color: "black", margin: "9px" }}
            />
          </div>
          <Divider orientation="vertical" flexItem />
          <div
            className="animals-filter"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h8"
              style={{
                marginBottom: "5px",
                fontWeight: "bolder",
              }}
            >
              Animals Kept
            </Typography>
            <FormGroup style={{ display: "flex", flexDirection: "row" }}>
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
      </div>
    </div>
  );
}

export default FilterBar;
