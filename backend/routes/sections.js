const Router = require('koa-router');  

const router = Router({prefix: '/api/v1/sections'});
const model = require('../models/sections');
const auth = require('../controllers/auth');

router.get('/', getAll);    
router.get('/:id([0-9]{1,})', auth, getById);

async function getAll(ctx){  
  let sections = await model.getAll();
  if (sections.length) {
    ctx.body = sections;
  }
}  

async function getById(ctx){
  let id = ctx.params.id;
  let section = await model.getById(id);
  if (section.length) {
    ctx.body = section[0];
  }
}

module.exports = router;
