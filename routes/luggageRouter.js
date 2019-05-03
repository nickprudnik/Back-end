const Router = require("koa-router");
const LuggageController = require("../controllers/luggageController");

const luggageRouter = new Router();

luggageRouter.post("/luggage", LuggageController.addLuggage);
luggageRouter.get("/luggage", LuggageController.getLuggage);

module.exports = luggageRouter;
