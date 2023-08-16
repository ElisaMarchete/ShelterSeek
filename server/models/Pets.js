const { Schema, model } = require("mongoose");

const petsSchema = new Schema({
  image: {
    type: String,
  },
  shelterId: {
    type: Schema.Types.ObjectId,
    ref: "Shelter",
  },
});

const Pets = model("Pets", petsSchema);

module.exports = Pets;
