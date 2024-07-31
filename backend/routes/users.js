const Router = require('koa-router');  
const bodyParser = require('koa-bodyparser');  

const router = Router({prefix: '/api/v1/users'});
const model = require('../models/users');
  
router.get('/:id([0-9]{1,})', getById);
router.post('/', bodyParser(), createUser);  

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

module.exports = router;
