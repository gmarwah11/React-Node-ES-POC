const express=require('express')
const cors=require('cors')
const mysql=require('mysql')


const app=express();
const SELECT_ALL_QUERY='SELECT * from users';

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'react_node'
});


connection.connect(err=>{
    if (err){
        return err;
    }
});
console.log(connection);

app.use(cors());

app.get('/',(req,res)=>{
    res.send('GO TO PRODUCT PAGE')
})
app.get('/products',(req,res)=>{
    res.send('GO TO PRODUCT PAGE')
})
