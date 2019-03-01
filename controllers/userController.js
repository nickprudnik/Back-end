const User = require('../models/model');
const status = require('http-status');

exports.getUser = async (ctx) => {
    const tasks = await  User.find({})
    if (!tasks) {
        throw new Error('There was an error retrieving your tasks.')
    } else {
        ctx.body = tasks
    }
}

exports.addUser = async (ctx) => { 
    const {email, password} = ctx.request.body
    const result = await User.create({
        email,
        password
    })
    if (!result) {
        throw new Error(status.BAD_REQUEST, {message: 'Task failed to create.'})
    } else {
        ctx.body = {message: 'Task created!', data: result}
    }
}

exports.checkUser = async (ctx) => {
    const {email, password} = ctx.request.body;

    if (!email || !password) {
        ctx.throw(status.BAD_REQUEST, { message: 'Invalid data' });
    }

    const user = await User.findOne({ email });

    if (user && !user.comparePasswords(password)) {
        ctx.throw(status.BAD_REQUEST, { message: 'Invalid data' });
    }

    if (!user) {
        ctx.throw(status.BAD_REQUEST, { message: 'User not found' });
    }

    ctx.body = user;
}