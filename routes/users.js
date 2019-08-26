const express = require('express');
const router = express.Router();
const UserService = require('../services/user_service')

let users = []
/* GET users listing. */
router.get('/',(req, res, next) => {
  (async ()=> {
    const users = await UserService.getAllUsers()
    res.locals.users = users
    res.render('users')
  })()
      .then((r)=>{
        console.log(r);
      })
      .catch((e)=>{
        console.log(e);
      })
    })

module.exports = router;
