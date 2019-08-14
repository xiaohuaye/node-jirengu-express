var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

});
router.get('/', function(req, res, next) {
  console.log(222)
  res.send('respond with a resource');
});

module.exports = router;
