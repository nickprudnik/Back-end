const status = require("http-status");
const { saveOrder } = require("../services/orderService");

exports.addOrder = async ctx => {
  try {
    await saveOrder(ctx.request.body);
    ctx.status = status.CREATED;
    ctx.body = {
      message: "Order save successful"
    };
  } catch (error) {
    ctx.body = {
      message: "Order save failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
