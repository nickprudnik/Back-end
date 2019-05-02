const { saveDeal, getDeal } = require("../repositories/bestdealRepo");

exports.saveDeal = async data => {
  try {
    return await saveDeal(data);
  } catch (err) {
    throw err;
  }
};

exports.getDeal = async data => {
  try {
    return await getDeal(data);
  } catch (err) {
    throw err;
  }
};
