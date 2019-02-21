'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/model');

dotenv.config();
const app = new Koa();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(logger());

const router = new Router({prefix: '/auth'});

require('./routes/basic')({ router });

app.use(logger())
   .use(router.routes())
   .listen(1234);