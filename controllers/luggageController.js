const status = require("http-status");
const { saveLuggage, getLuggage } = require("../services/luggageService");

exports.addLuggage = async ctx => {
  try {
    await saveLuggage(ctx.request.body);
    ctx.status = status.CREATED;
    ctx.body = {
      message: "Ticket save successful"
    };
  } catch (error) {
    ctx.body = {
      message: "Ticket save failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};

exports.getLuggage = async ctx => {
  try {
    const luggage = await getLuggage(ctx.request.query);
    if (!!luggage) {
      ctx.status = status.OK;
      ctx.body = luggage;
    }
  } catch (error) {
    ctx.body = {
      message: "Get Ticket failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
