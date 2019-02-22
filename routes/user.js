const Router = require('koa-router');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.get('/', userController.getUser);
userRouter.post('/sign_up', userController.addUser);

module.exports = userRouter;