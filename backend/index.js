// Belbin API

const Koa = require('koa');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());

const welcome =  require('./routes/welcome.js')
app.use(welcome.routes())

const sections = require('./routes/sections.js');
app.use(sections.routes());

const users = require('./routes/users.js');
app.use(users.routes());

app.listen(3000);
