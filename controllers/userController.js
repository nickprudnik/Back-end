const User = require('../models/model');

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
        throw new Error('Task failed to create.')
    } else {
        ctx.body = {message: 'Task created!', data: result}
    }
}