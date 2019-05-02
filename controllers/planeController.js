const status = require("http-status");
const { savePlane, getPlane } = require("../services/planeService");

exports.addPlane = async ctx => {
  try {
    await savePlane(ctx.request.body);
    ctx.status = status.CREATED;
    ctx.body = {
      message: "Plane Shema save successful"
    };
  } catch (error) {
    ctx.body = {
      message: "Plane Shema save failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};

exports.getPlane = async ctx => {
  try {
    const plane = await getPlane(ctx.request.query);
    if (!!plane) {
      ctx.status = status.OK;
      ctx.body = plane[0];
    }
  } catch (error) {
    ctx.body = {
      message: "Get plane shema failed"
    };
    ctx.status = status.BAD_REQUEST;
  }
};
