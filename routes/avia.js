const Router = require("koa-router");
const AirportController = require("../controllers/airportController");
const TicketController = require("../controllers/ticketController");

const aviaRouter = new Router();

aviaRouter.post("/airports", AirportController.addAirport);
aviaRouter.get("/get_airports", AirportController.getAirport);
aviaRouter.post("/tickets", TicketController.addTicket);
aviaRouter.get("/get_tickets", TicketController.getTicket);

module.exports = aviaRouter;
