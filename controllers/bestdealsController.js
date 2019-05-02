const status = require("http-status");
const { saveDeal, getDeal } = require("../services/bestdealService");

exports.saveDeal = async ctx => {
  try {
    await saveDeal(ctx.request.body);
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

exports.getDeal = async ctx => {
  try {
    const Deal = await getDeal(ctx.request.query);
    if (!!Deal) {
      ctx.status = status.OK;
      ctx.body = Deal;
    }
  } catch (error) {
    ctx.body = {
      message: "Get airport failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
