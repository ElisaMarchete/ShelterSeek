import mongoose from "mongoose";

const ShelterSchema = new mongoose.Schema(
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

export default mongoose.model("Shelter", ShelterSchema);
