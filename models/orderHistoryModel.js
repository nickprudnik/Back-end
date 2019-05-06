const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, require: true },
  dateFrom: { type: Date, require: true },
  dateTo: { type: Date, require: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  fromCountry: { type: String, required: true },
  toCountry: { type: String, required: true },
  price: { type: Number, required: true },
  adult: { type: Number, required: true }
});

module.exports = mongoose.model("Order", Order);
