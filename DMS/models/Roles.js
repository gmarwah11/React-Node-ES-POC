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
    var sql = "CREATE TABLE Roles(id int NOT NULL AUTO_INCREMENT, roleName varchar(255), PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("RolesTable created");
    });
  });

