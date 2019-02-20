'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const app = new Koa();

app.use(logger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

const router = new Router();
const dogRouter = new Router({
  prefix: '/dogs'
});

require('./routes/basic')({ router });
require('./routes/dogs')({ dogRouter })

app.use(router.routes());
app.use(router.allowedMethods());

app.use(dogRouter.routes());
app.use(dogRouter.allowedMethods());

const server = app.listen(1234);
module.exports = server;