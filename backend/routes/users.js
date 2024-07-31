const Router = require('koa-router');  
const bodyParser = require('koa-bodyparser');  
const bcrypt = require('bcrypt');

const router = Router({prefix: '/api/v1/users'});
const model = require('../models/users');
  
router.get('/:id([0-9]{1,})', getById);
router.post('/', bodyParser(), createUser);  
router.post('/login', bodyParser(), login);

async function getById(ctx){
  let user = await model.getById(ctx.params.id);
    if (user.length) {
      ctx.status = 201;
      ctx.body = user;
    }
  model.add(
    {
      username:"asim",
      password:"password"
    }
  )
}

async function createUser(ctx) {
  const body = ctx.request.body;
  let result = await model.add(body);
  if (result) {
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
  }
}

async function login(ctx) {
  const user = ctx.request.body;
  try {
    result = await model.getByUsername(user.username);;
  } catch (error) {
    console.error(`${Date.now().toString()}   User [${user.username}] authentication error: ${error}`);
  }

  if (result.length) {
    const selectedUser = result[0];
    if (await bcrypt.compare(user.password, selectedUser.password)) {
      const {ID, username, password} = selectedUser;
      ctx.status = 200;
      ctx.body = {ID, username, password};
    }
  }
}

module.exports = router;
