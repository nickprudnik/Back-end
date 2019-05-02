const Router = require("koa-router");
const BestdealsController = require("../controllers/bestdealsController");

const bestdealsRouter = new Router();

bestdealsRouter.post("/deals", BestdealsController.saveDeal);
bestdealsRouter.get("/get_deals", BestdealsController.getDeal);

module.exports = bestdealsRouter;
