const Router = require("koa-router");
const TicketController = require("../controllers/ticketController");

const ticketRouter = new Router();

ticketRouter.post("/tickets", TicketController.addTicket);
ticketRouter.get("/get_tickets", TicketController.getTicket);

module.exports = ticketRouter;
