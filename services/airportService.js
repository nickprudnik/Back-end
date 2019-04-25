const { saveAirport, getAirport } = require("../repositories/airportRepo");

exports.saveAirport = async data => {
  try {
    await saveAirport(data);
  } catch (err) {
    throw err;
  }
};

exports.getAirport = async data => {
  try {
    return await getAirport(data);
  } catch (err) {
    throw err;
  }
};
