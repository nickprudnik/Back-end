const Router = require("koa-router");
const PlaneController = require("../controllers/planeController");

const planeRouter = new Router();

planeRouter.post("/plane", PlaneController.addPlane);
planeRouter.get("/get_plane", PlaneController.getPlane);

module.exports = planeRouter;
