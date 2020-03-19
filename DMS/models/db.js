var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE Regax_db", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


  module.exports.conn = con