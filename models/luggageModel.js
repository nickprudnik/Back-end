const mongoose = require("mongoose");

const Luggage = new mongoose.Schema({
  kg: { type: Number, required: true, unique: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  styleclass: { type: String, required: true }
});

module.exports = mongoose.model("Luggage", Luggage);
