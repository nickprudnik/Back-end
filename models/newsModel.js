const mongoose = require("mongoose");

const News = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  newName: { type: String, required: true },
  about: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model("News", News);
