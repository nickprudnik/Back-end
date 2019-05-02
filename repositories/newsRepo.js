const News = require("../models/newsModel");

exports.saveNews = async newsData => {
  const news = new News(newsData);
  return await news.save();
};

exports.getNews = async () => {
  return await News.find({});
};
