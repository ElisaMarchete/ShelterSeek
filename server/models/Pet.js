import { Schema, model } from "mongoose";

const PetSchema = new Schema({
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
});

PetSchema.virtual("age").get(function () {
  return new Date().getFullYear() - this.birthday;
});

export default model("Pet", PetSchema);
