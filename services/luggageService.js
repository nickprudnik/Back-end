const { saveLuggage, getLuggage } = require("../repositories/luggageRepo");

exports.saveLuggage = async data => {
  try {
    return await saveLuggage(data);
  } catch (err) {
    throw err;
  }
};

exports.getLuggage = async data => {
  try {
    return await getLuggage(data);
  } catch (err) {
    throw err;
  }
};
