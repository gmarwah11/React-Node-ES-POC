var express=require('express');
var app=express();
var mysql=require('mysql');
var bodyParser=require('body-parser');
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}))



var con=mysql.createConnection({
    host:'localhost',
    
    user: 'root',
    password: '',
    database: 'react_node',
})



var server=app.listen(4545,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("start")
})




con.connect(function(error){
    if(error)
    console.log(error);
    else console.log("connected")
    
})



app.get('/users',function(req,res){
    con.query('select * from users',function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});


app.get('/products/add',(req,res)=>{


    userid=req.body.userId;
    email=req.body.emailId;
    name=req.body.name;
    hashcode=req.body.hashCode;
    salt=req.body.salt;
    lastlogin=req.body.type;
    active=req.body.active;
    const INSERT_USER_QUERY='INSERT INTO users(userId,emailId,name,hashCode,salt,lastLogin,type,active) VALUES(userid,email,name,hashcode,salt,lastlogin,active)';
    con.query(INSERT_USER_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
           return res.send('succesfully  !!')  
        }

    });  
});




app.get('/products',(req,res)=>{
    
    con.query('select * from users',function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});