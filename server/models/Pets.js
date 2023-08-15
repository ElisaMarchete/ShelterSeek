const { Schema, model } = require("mongoose");

const petsSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  shelterId: {
    type: Schema.Types.ObjectId,
    ref: "Shelter",
  },
});

const Pet = model("Pets", petsSchema);

module.exports = Pet;
