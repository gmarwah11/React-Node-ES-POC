const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const USERSCRUD = require('../db/dbOperation/userOperation');
const DB = require('../db/common/connection');
const AUTHUSEROPERATION = require('../models/auth/authOperation');
passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  this.SQLQuery = `SELECT * FROM Users WHERE emailId = '${email}';`
  console.log(this.SQLQuery);
  DB.query(this.SQLQuery, (err, user) => {
        if (err) throw err;
        console.log('Users Row Find!!',user[0]);
        // this.USEROBJ = result[0];
        if (!user || !AUTHUSEROPERATION.validatePassword(password,user[0].hashCode)) {
          return done(null, false, { errors: { 'email or password': 'is invalid' } });
        }
        console.log('Your password is coorect');
        return done(null, user);
    }); 
}));