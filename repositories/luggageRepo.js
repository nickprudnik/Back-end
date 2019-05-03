const Luggage = require("../models/luggageModel");

exports.saveLuggage = async luggageData => {
  const luggage = new Luggage(luggageData);
  return await luggage.save();
};

exports.getLuggage = async () => {
  return await Luggage.find({});
};
