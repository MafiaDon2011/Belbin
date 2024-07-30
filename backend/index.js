// Belbin API

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');



const app = new Koa();
const router = new Router();

app.use(cors());

router.get('/api/v1', welcomeAPI);
app.use(router.routes());


function welcomeAPI(ctx, next) {
  ctx.body = {
    message: "Welcome to the Belbin API!"
  }
}

const sections = require('./routes/sections.js');
app.use(sections.routes());

const users = require('./routes/users.js');
app.use(users.routes());

app.listen(3000);
