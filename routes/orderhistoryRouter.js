const Router = require("koa-router");
const OrderController = require("../controllers/orderController");

const orderRouter = new Router();

orderRouter.post("/order", OrderController.addOrder);

module.exports = orderRouter;
