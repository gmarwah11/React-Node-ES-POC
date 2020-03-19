
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Regax_db',
});

 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =  "CREATE TABLE Documents(id int NOT NULL AUTO_INCREMENT,title TEXT,description MEDIUMTEXT,path varchar(255),country  varchar(255),uploadedBy int,foreign key (uploadedBy) references Users(userId),created varchar(255), PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Documents created");
    });
  });
