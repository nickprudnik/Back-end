const status = require("http-status");
const { saveAirport, getAirport } = require("../services/airportService");

exports.addAirport = async ctx => {
  try {
    await saveAirport(ctx.request.body);
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

exports.getAirport = async ctx => {
  try {
    const airport = await getAirport(ctx.request.query);
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
