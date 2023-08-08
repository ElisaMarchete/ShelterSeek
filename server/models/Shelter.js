import { Schema, model } from "mongoose";
import Pet from "./Pet";

const PetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    animal: {
      type: String,
      required: true,
    },
    breed: [String],
    birthday: Number,
    color: [String],
    media: [String],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

PetSchema.virtual("age").get(function () {
  return new Date().getFullYear() - this.birthday;
});

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
    pets: [PetSchema],
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
