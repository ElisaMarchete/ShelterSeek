import { Schema, model } from "mongoose";
import Pet from "./Pet.js";

const ShelterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    address: {
      type: String,
      required: true,
    },
    contact: {
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
      website: {
        type: String,
      },
    },
    media: [String],
    pets: [Pet.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Get number of pets in shelter.
ShelterSchema.virtual("petCount").get(function () {
  return this.pets.length;
});

export default model("Shelter", ShelterSchema);
