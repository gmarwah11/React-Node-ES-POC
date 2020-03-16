const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors'); 
const errorHandler = require('errorhandler');
const morgan_dev = require('morgan')('dev');
const routes = require('./routes/index');
//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Initiate our app
const app = express();

// Configure our app
app.use(cors());
app.use(morgan_dev);
bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret:'regaskaaserver',cookie:{maxAge:60000},resave:false,saveUninitialized:false}));

if(!isProduction){
    app.use(errorHandler());
}
// Mongoose configure

// Model and Routes
require('./models/user/userOperation');
require('./config/passportLocal');
app.use('/',routes);

// 
const err = {error:'error is related to Express',status:'500'};
if(!isProduction){
    app.use(err,(req,res)=>{
      res.status(500).send({
        errors: {
            message: err.message,
            error: err,
          }
      });
    });
}
app.listen(4000 || process.env.PORT,(err,data)=>{
   if(err){
       console.log('Error occured in Server Starting');
   }
   console.log('Server has been started on http://localhost:4000');
});