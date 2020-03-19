var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    host: 'localhost:9200'
  });

  const params = {
    'index' : 'documents',
    'body'  : {
        "query" : {
            
            "multi_match" : {
              "query" : "1", 
              "type":"bool_prefix",
              "fields" : [ "id" ],
              "zero_terms_query" : "all"
            }         
        }}}
    


query = client.search(params); 
