const passport = require('koa-passport');
const basicAuth = require('../strategies/basic');

passport.use('basic', basicAuth);

/*const authMiddleware = async (ctx, next) => {
    return passport.authenticate('basic', { session: false }, (err, user, info) => {
        if (err) {
            ctx.status = 401;
            ctx.body = { error: err.message };
            return;
        }
        if (!user) {
            ctx.status = 401;
            ctx.body = { error: 'Authentication failed' };
            return;
        }
        ctx.state.user = user;
        return next();
    })(ctx, next);
};

module.exports = authMiddleware;*/
module.exports = passport.authenticate(['basic'], {session:false});
