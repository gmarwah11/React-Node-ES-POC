const mysql = require('mysql')
var elasticsearch = require('elasticsearch');

module.exports = () =>{
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Regax_db',
});

var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

let i = 0

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM Documents", function (err, result, fields) {
      if (err) throw err;
      const arr = result.length;
      for( i ; i < arr ; i++){
    client.index({
        index: 'documents',
        id: result[0].id,
        type: 'test',
        body: {
            "title" : result[i].title,
            "description" : result[i].description,
            "path" : result[i].description,
            "country" : result[i].country,
            "uploadedBy" : result[i].uploadedBy,
            "created" : result[i].created
        }
    }, function(err, resp, status) {
        console.log(resp);
    });
}
    
  })

});


}