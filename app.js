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

const router = new Router({prefix: '/auth'});

require('./routes/basic')({ router });

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(1234);
module.exports = server;