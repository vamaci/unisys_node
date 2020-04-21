var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id?', function(req, res, next) {
  let user = req.params.id ? 'user' + req.params.id : 'users'
  if(req.params.id && req.params.name){
    user += `: ${req.query.name}`
  }
  res.send(`Respond with a resource of users, id = ${user} `);
});
module.exports = router;
