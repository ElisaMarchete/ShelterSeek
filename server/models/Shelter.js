const { Schema, model } = require("mongoose");
const Donation = require("./Donation");
const User = require("./User");

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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ShelterSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

const Shelter = model("Shelter", shelterSchema);

module.exports = Shelter;
