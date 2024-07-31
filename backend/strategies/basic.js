const BasicStrategy = require('passport-http').BasicStrategy;
const users = require('../models/users');

const verifyPassword = function (user, password) {
    return user.password === password;
};

const checkUserAndPass = async (username, password, done) => {
    try {
        const result = await users.findByUsername(username);
        if (result.length) {
            const user = result[0];
            if (verifyPassword(user, password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        } else {
            return done(null, false, { message: 'Incorrect username.' });
        }
    } catch (error) {
        return done(error);
    }
};

const strategy = new BasicStrategy(checkUserAndPass);

module.exports = strategy;
