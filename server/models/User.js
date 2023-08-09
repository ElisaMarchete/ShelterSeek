import { Schema, model } from "mongoose";
import { hashPassword, checkPassword } from "../utils/helpers.js";

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
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["user", "shelter"],
        message: "{VALUE} is not supported. Must have role of user or shelter.",
      },
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

UserSchema.methods.checkPassword = checkPassword;

export default model("User", UserSchema);
