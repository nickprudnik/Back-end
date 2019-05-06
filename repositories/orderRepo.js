const Order = require("../models/orderHistoryModel");

exports.saveOrder = async ordertData => {
  const order = new Order(ordertData);
  return await order.save();
};
