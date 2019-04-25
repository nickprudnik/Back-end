const Airport = require("../models/airportModel");

exports.saveAirport = async airportData => {
  const airport = new Airport(airportData);
  await airport.save();
};

exports.getAirport = async data => {
  return await Airport.find({});
};
