const express = require('express');
const router = express.Router();
const User = require('../models/model_user.js');

router.use('/', function(req, res, next) {
  if(req.query.name !== 'Xiaohuaye'){
    res.locals.message = "sorry,I don't remember you"
    res.render('nosign')
  }else{
   if(req.query.password === '888'){
     res.locals.title = "express"
     res.render('index')
   }else{
     res.render('sign')
   }
  }
});

module.exports = router;
