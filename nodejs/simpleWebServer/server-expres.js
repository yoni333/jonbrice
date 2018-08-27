//npm dependencies  - express , body-parser

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    console.log('server /')
	res.send('<h1>Hello World</h1>');
});

app.get('/', function(req, res){
    console.log('server /')
	res.send('<h1>Hello World</h1>');
});

app.listen(3000);
console.log('Server is running on port 3000...');