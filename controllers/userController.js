const User = require('../models/model');
const status = require('http-status');
const validateRegisterInput = require('../validation/signUp');
const validateLoginInput = require('../validation/signIn');

exports.getUser = async (ctx) => {
    const tasks = await  User.find({})
    if (!tasks) {
        throw new Error('There was an error retrieving your tasks.')
    } else {
        ctx.body = tasks
    }
}

exports.addUser = async (ctx) => {
    const { errors, isValid } = validateRegisterInput(ctx.request.body);
    const { email, password } = ctx.request.body;

    if (!isValid) {
        ctx.status = 400;
        ctx.body = { errors };
    }
    const user = await User.findOne({
        email
    })
        if(user) {
             ctx.status = 401;
             ctx.body = { message: 'Email already exists' };
        }
        else {
            const result = User.create({
                email,
                password
            })
            ctx.body = {message: 'Task created!', result}
        }
    
}


exports.checkUser = async ( ctx ) => {
    const {email, password} = ctx.request.body;

    if (!email || !password) {
        ctx.throw(status.BAD_REQUEST, { message: 'Invalid data' });
    }

    const user = await User.findOne({ email });

    if (user && !user.comparePasswords(password)) {
        ctx.throw(status.BAD_REQUEST, { message: 'Login successful' });
    }

    if (!user) {
        ctx.throw(status.BAD_REQUEST, { message: 'User not found' });
    }

    ctx.body = 'Login successful';
}

exports.restorePassword = async (ctx) => {
    const { email, password } = ctx.request.body;

    if (!email) {
        ctx.throw(status.BAD_REQUEST, { message: 'Invalid data' });
    }

    const user = await User.findOne({ email: email });
    
    if (user) {
        const result = await User.updateOne({ email: email }, {$set:{ password: password }});
        ctx.body = {message: 'User modified', data: result};
    }
    
}