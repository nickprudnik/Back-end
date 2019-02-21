const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.set('debug', true);

const User = new mongoose.Schema({
    id: String,
	email: {
        type: String,
        required: 'Укажите e-mail'
    },
    passwordHash: String,
    salt: String,
});    

User.virtual('password')
    .set(function(password) {
    if (password) {
        this.salt = crypto.randomBytes(128).toString('base64');
        this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
    } else {
        this.salt = undefined;
        this.passwordHash = undefined;
    }
    })

User.methods.checkPassword = function () {
    if (!password)  return false;
    if (!this.passwordHash) return false;
    return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.passwordHash;        
}

module.exports = mongoose.model('User', User);