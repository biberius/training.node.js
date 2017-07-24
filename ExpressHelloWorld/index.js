var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(3000);

console.log("Listening for requests on http://127.0.0.1:3000");