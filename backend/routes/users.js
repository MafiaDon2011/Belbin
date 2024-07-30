const Router = require('koa-router');  
const bodyParser = require('koa-bodyparser');  

const router = Router({prefix: '/api/v1/users'});

let users = [
    {username:'loudishly', password:'^%AD)ns!/'},
    {username:'cirripeds', password:'n!9!dTS%i'},
    {username:'zombified', password:'U!H#}f=lT'}
  ];  
  
router.get('/:id([0-9]{1,})', getById);
router.post('/', bodyParser(), createUser);  

function getById(cnx, next){
  let id = cnx.params.id;  
  if ((id < users.length+1) && (id > 0)) {
    cnx.body = users[id-1];
  } else {
    cnx.status = 404;
  }
}

function createUser(cnx, next){
    // create user
  }

module.exports = router;
