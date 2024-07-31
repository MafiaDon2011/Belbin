const passport = require('koa-passport');
const basicAuth = require('../strategies/basic');

passport.use('basic', basicAuth);

module.exports = passport.authenticate(['basic'], {session:false});
