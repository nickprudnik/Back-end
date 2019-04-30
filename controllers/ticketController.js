const status = require("http-status");
const { saveTickets, getTickets } = require("../services/ticketService");

exports.addTicket = async ctx => {
  try {
    await saveTickets(ctx.request.body);
    ctx.status = status.CREATED;
    ctx.body = {
      message: "Airport save successful"
    };
  } catch (error) {
    ctx.body = {
      message: "Airport save failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};

exports.getTicket = async ctx => {
  try {
    const ticket = await getTickets(ctx.request.query);
    if (!!ticket) {
      ctx.status = status.OK;
      ctx.body = ticket;
    }
  } catch (error) {
    ctx.body = {
      message: "Get airport failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
