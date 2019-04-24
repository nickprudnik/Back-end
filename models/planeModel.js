const mongoose = require("mongoose");

const PlaneShema = new mongoose.Schema({
  code: { type: String, require: true, unique: true },
  rows: {
    type: Number,
    required: true
  },
  subRows: {
    type: Number,
    required: true
  },
  seats: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("PlaneShema", PlaneShema);
