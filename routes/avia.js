const Router = require("koa-router");
const AirportsController = require("../controllers/airportController");

const aviaRouter = new Router();

aviaRouter.post("/airports", AirportsController.addAirport);
aviaRouter.get("/get_airports", AirportsController.getAirport);

module.exports = aviaRouter;
