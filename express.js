var express = require('express');
require('./extern.js');
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

app.get('/form',function(req, res){
	var t = req.query.test;
	console.log(req.route + " param:" + t);
	res.send('<html><head></head><body><h1>'+t+'</h1></body></html>');
});
app.get('/res',function(req, res){
	console.log("Empfange: " + req.body);
	res.send('<html><head></head><body><h3>ergebnis</h3></body></html>');
});

var server = app.listen(30000, function () {
	console.log(extern);
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})