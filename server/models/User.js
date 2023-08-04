import { Schema, model } from "mongoose";
import { hashPassword } from "../utils/helpers.js";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      set: hashPassword,
    },
    role: {
      enum: ["user", "shelter"],
      default: "user",
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    savedShelters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Shelter",
      },
    ],
    savedPets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

export default model("User", UserSchema);
