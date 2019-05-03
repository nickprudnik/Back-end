const Router = require("koa-router");
const userRouter = require("./user");
const aviaRouter = require("./avia");
const ticketRouter = require("./ticketRoutes");
const bestdealsRouter = require("./bestdealsRouter");
const newsRouter = require("./newsRouter");
const planeRouter = require("./planeRouter");
const luggageRouter = require("./luggageRouter");

const router = new Router();

router.use("/user", userRouter.routes());
router.use("/avia", aviaRouter.routes());
router.use("/ticket", ticketRouter.routes());
router.use("/search_bestdeals", bestdealsRouter.routes());
router.use("/latest_news", newsRouter.routes());
router.use("/planeShemes", planeRouter.routes());
router.use("/luggage", luggageRouter.routes());

module.exports = router;
