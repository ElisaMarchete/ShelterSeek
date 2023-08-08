const mongoose = require("mongoose");

const { Schema } = mongoose;

const donationSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
    min: 0.99,
  },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
