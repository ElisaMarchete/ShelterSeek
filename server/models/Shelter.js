// import { Schema, model } from "mongoose";
// import Pet from "./Pet";

// const PetSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     animal: {
//       type: String,
//       required: true,
//     },
//     breed: [String],
//     birthday: Number,
//     color: [String],
//     media: [String],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );

// PetSchema.virtual("age").get(function () {
//   return new Date().getFullYear() - this.birthday;
// });

// const ShelterSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     description: String,
//     address: {
//       type: String,
//       required: true,
//     },
//     contact: {
//       phone: {
//         type: String,
//       },
//       email: {
//         type: String,
//       },
//       website: {
//         type: String,
//       },
//     },
//     media: [String],
//     pets: [Pet.schema],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );

// // Get number of pets in shelter.
// ShelterSchema.virtual("petCount").get(function () {
//   return this.pets.length;
// });

// export default model("Shelter", ShelterSchema);

const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Donation = require("./Donation");

const shelterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  website: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 150,
  },
  image: {
    type: String,
    required: true,
  },
  BankTransitNumber: {
    type: String,
    required: true,
  },
  BankInstitutionNumber: {
    type: String,
    required: true,
  },
  BankAccount: {
    type: String,
    required: true,
  },
  donations: [Donation.schema],
});
const Shelter = mongoose.model("Shelter", shelterSchema);

module.exports = Shelter;
