var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
});
app.get('/json', function (req, res) {
	var obj = { name:"Hans", beruf: "Maurer"};
	json = JSON.stringify(obj);
	res.set("Content-Type", "application/json");
   	res.send(json);
});

var server = app.listen(30000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})