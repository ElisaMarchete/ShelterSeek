const { Schema, model } = require("mongoose");

const petsSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  breed: {
    type: String,
  },
  descriprion: {
    type: String,
  },
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
