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
    var sql = "CREATE TABLE Users(userId int NOT NULL AUTO_INCREMENT,emailId varchar(255) NOT NULL,FirstName varchar(255),LastName varchar(255), hashCode longtext, salt varchar(255) ,lastLogin Date NOT NULL,roleId int,	company varchar(255),country varchar(255),phonePrefix varchar(3),phoneNumber varchar(10), industry varchar(255),active BOOLEAN, PRIMARY KEY (userId))"
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("UsersTable created");
    });
  });

  





















// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE Regax_db", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   })