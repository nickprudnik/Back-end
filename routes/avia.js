const Router = require("koa-router");
const AirportController = require("../controllers/airportController");

const aviaRouter = new Router();

aviaRouter.post("/airports", AirportController.addAirport);
aviaRouter.get("/get_airports", AirportController.getAirport);

module.exports = aviaRouter;
