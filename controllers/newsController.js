const status = require("http-status");
const { saveNews, getNews } = require("../services/newsService");

exports.addNews = async ctx => {
  try {
    await saveNews(ctx.request.body);
    ctx.status = status.CREATED;
    ctx.body = {
      message: "News save successful"
    };
  } catch (error) {
    ctx.body = {
      message: "News save failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};

exports.getNews = async ctx => {
  try {
    const news = await getNews(ctx.request.query);
    if (!!news) {
      ctx.status = status.OK;
      ctx.body = news;
    }
  } catch (error) {
    ctx.body = {
      message: "Get news failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
