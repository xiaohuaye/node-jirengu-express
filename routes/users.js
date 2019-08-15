const express = require('express');
const router = express.Router();

router.use('/users', (req, res, next)=> {
  console.log(req.method);
  console.log(1111111);
  next()
});

module.exports = router;
