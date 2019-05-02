const Router = require("koa-router");
const NewsController = require("../controllers/newsController");

const newsRouter = new Router();

newsRouter.post("/news", NewsController.addNews);
newsRouter.get("/get_news", NewsController.getNews);

module.exports = newsRouter;
