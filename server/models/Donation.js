const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const donationSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
    min: 0.99,
  },
  shelterId: {
    type: Schema.Types.ObjectId,
    ref: "Shelter",
  },
});

const Donation = model("Donation", donationSchema);

module.exports = Donation;
