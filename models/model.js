const mongoose = require('mongoose');
const bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

const User = new mongoose.Schema({
    id: String,
	email: String,
    password: String
});    

User.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err)  {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
            
        });
    });
});

module.exports = mongoose.model('User', User);