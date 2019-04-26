const status = require("http-status");
const { saveTicket, getTicket } = require("../services/airportService");

exports.addTicket = async ctx => {
  try {
    await saveTicket(ctx.request.body);
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
    const airport = await getTicket(ctx.request.query);
    if (!!airport) {
      ctx.status = status.OK;
      ctx.body = {
        ...airport
      };
    }
  } catch (error) {
    ctx.body = {
      message: "Get airport failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
