const { saveOrder } = require("../repositories/orderRepo");

exports.saveOrder = async data => {
  try {
    return await saveOrder(data);
  } catch (err) {
    throw err;
  }
};
