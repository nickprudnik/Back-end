const Order = require("../models/orderHistoryModel");

exports.saveOrder = async ordertData => {
  const order = new Order(ordertData);
  console.log(order);
  return await order.save();
};
