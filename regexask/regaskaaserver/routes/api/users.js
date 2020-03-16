const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const USERS = require('../../db/schema/userSchema');
const USERSDBOPEARTIONS = require('../../db/dbOperation/userOperation');
router.post('/signup',auth.optional,(req,res,next)=>{
    res.send({mesage:'in Signup'});
});
router.post('/login',auth.optional,(req,res,next)=>{
    res.send({mesage:'in login'});
})
router.get('/isAuthUser',auth.required,(req,res,next)=>{
    res.send({mesage:'in is Auth'});
});
module.exports = router;