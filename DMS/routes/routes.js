const express = require('express');
const app = express();
const mysql = require('mysql')
var elasticsearch = require('elasticsearch');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Regax_db',
});

module.exports = (app)=>{

    



 //upload
app.post('/documents/upload',(req,res)=>{
  const a = req.body.id
  console.log(a)
  const b = req.body.title
  console.log(b)
  const c = req.body.description
  console.log(c)
  const d = req.body.path
  console.log(d)
  const e = req.body.country
  console.log(e)
  const f = req.body.uploadedBy
  console.log(f)
  const g = req.body.created
  console.log(g)
    con.connect(function(err) {
        if (err) throw err;
          con.query( "INSERT INTO Documents  VALUES (?,?,?,?,?,?,?)",[a,b,c,d,e,f,g], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
        });
  
})
 

   
///fetch
app.get('/documents/fetch/:fn',(req,res)=>{
  const a = req.params.fn
  console.log(a)
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Documents where id = ?",[a], function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });

})

app.get('/documents/list',(req,res)=>{

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Documents", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });


})

app.get('/documents/search/:q',(req,res)=>{
  var client = new elasticsearch.Client({
    host: 'localhost:9200'
  });
  const response =  client.search({
    index: 'documents',
    type: 'test',
    body: {
      query: {
        match: {
          body: req.params.q
        }
      }
    }
  })


for (const tweet of response.hits.hits) {
  console.log('tweet:', tweet);
}
    
});
}
