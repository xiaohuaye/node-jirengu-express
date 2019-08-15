const express = require('express');
const router = express.Router();
const NoSign = require('../views/nosign.ejs')
/* GET home page. */
router.use('/', function(req, res, next) {
  if(req.params.name !== 'Xiaohuaye'){
    res.locals.message = "sorry,I don't remember you"
    let ele = NoSign
    res.locals.nosign = ele
    res.render('nosign')
  }
  next()
});

module.exports = router;
