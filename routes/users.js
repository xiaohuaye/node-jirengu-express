const express = require('express');
const router = express.Router();

console.log(11111111111111)
router.use('/users/log1', log1());
router.use('/users/log1',(req, res, next)=>{
  console.log(1)
  next()
})
router.use('/users/log1/log2', log2);
router.use('/users/log1/log2/log3', log3);


function log1(){
  return function log11(req, res, next) {
    console.log(11)
    next()
  }
}

function log2(req, res, next){
  console.log(2)
  next()
}

function log3(req, res, next){
  console.log(3)
  next()
}
module.exports = router;
