const { saveNews, getNews } = require("../repositories/newsRepo");

exports.saveNews = async data => {
  try {
    return await saveNews(data);
  } catch (err) {
    throw err;
  }
};

exports.getNews = async data => {
  try {
    return await getNews(data);
  } catch (err) {
    throw err;
  }
};
