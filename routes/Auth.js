var express = require('express');
var router = express.Router();
var adminAuthentication=require('../controller/authController')
/* GET home page. */
router.post('/signup',adminAuthentication.Signup,err=>{
  console.log('error while signup user')
})
router.post('/signin',adminAuthentication.Signin,err=>{
  console.log('error while signup user')
})

module.exports=router