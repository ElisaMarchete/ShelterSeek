import { Schema, model } from "mongoose";
import { hashPassword } from "../utils/helpers.js";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    },
    role: {
      enum: ["user", "shelter"],
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

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export default model("User", UserSchema);
