const BestDeal = require("../models/bestdealsModel");

exports.saveDeal = async bestdealData => {
  const bestdeal = new BestDeal(bestdealData);
  return await bestdeal.save();
};

exports.getDeal = async () => {
  return await BestDeal.find({});
};
