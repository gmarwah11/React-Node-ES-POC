const express = require('express');
const app = express();
const mysql = require('mysql')


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_node',
});

/**
 * @swagger
 * definitions:
 *   Users:
 *     properties:
 *       id:
 *         type: integer
 *       uploadedBy:
 *         type: integer
 *       name:
 *         type: string
 *       path:
 *         type: string
 *       info:
 *         type: string
 *       country: 
 *         type: string
 *       created:
 *         type: string
 *       type:
 *         type: string
 */


module.exports = (app)=>{

    
/**
 * @swagger
 * /upload:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new Users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Users
 *         description: Users object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Users'
 *     responses:
 *       200:
 *         description: Successfully created
 */


 //upload
app.post('/upload',(req,res)=>{
  const a = req.body.id
  console.log(a)
  const b = req.body.uploadedBy
  console.log(b)
  const c = req.body.name
  console.log(c)
  const d = req.body.path
  console.log(d)
  const e = req.body.info
  console.log(e)
  const f = req.body.country
  console.log(f)
  const g = req.body.created
  console.log(g)
  const h = req.body.type
  console.log(h)
    con.connect(function(err) {
        if (err) throw err;
          con.query( "INSERT INTO Documents  VALUES (?,?,?,?,?,?,?,?)",[a,b,c,d,e,f,g,h], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
        });
  
})
 
/**
 * @swagger
 * /fetch/{fn}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single USer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fn
 *         description: USer's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Users
 */
   
///fetch
app.get('/fetch/:id',(req,res)=>{
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Documents where id = ?",[req.params.id], function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });

})
   
/**
 * @swagger
 * /list:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single Users
 */

app.get('/list',(req,res)=>{

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Documents", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });


})




}

