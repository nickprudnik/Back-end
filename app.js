'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const koaBody = require('koa-body');
const cors = require('@koa/cors');

const router = require('./routes/index');
mongoose.set('debug', true);

dotenv.config();
const app = new Koa();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(logger())
   .use(koaBody())
   .use(cors())
   .use(router.routes())
   .listen(process.env.PORT);