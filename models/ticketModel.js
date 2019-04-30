const mongoose = require("mongoose");

const Ticket = new mongoose.Schema({
  dateFrom: { type: Date, require: true },
  dateTo: { type: Date, require: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  fromCountry: { type: String, required: true },
  toCountry: { type: String, required: true },
  price: { type: Number, required: true },
  planeId: { type: Number, required: true },
  adult: { type: Number, required: true }
});

module.exports = mongoose.model("Ticket", Ticket);
