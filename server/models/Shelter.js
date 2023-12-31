const { Schema, model } = require("mongoose");
const Donation = require("./Donation");
const Pets = require("./Pets");

const { checkPassword, hashPassword } = require("../utils/helpers");

// this schema in models connects with mongoose database

const shelterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
    rating: {
      type: Number,
      required: false,
    },
    dog: {
      type: Boolean,
      default: false,
    },
    cat: {
      type: Boolean,
      default: false,
    },
    rabbit: {
      type: Boolean,
      default: false,
    },
    pets: [Pets.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

shelterSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

shelterSchema.methods.checkPassword = checkPassword;

const Shelter = model("Shelter", shelterSchema);

module.exports = Shelter;
